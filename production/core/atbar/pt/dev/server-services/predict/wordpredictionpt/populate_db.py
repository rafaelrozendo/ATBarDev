# -*- coding: utf-8 -*-
import sqlite3 as lite
import sys

from bs4 import BeautifulSoup
import urllib2
from nltk.probability import ConditionalFreqDist
from nltk.probability import FreqDist
import re
from sets import Set

base_url = "https://pt.wikipedia.org"
current_url = "/wiki/Brasil" #the initial URL

found_links = set()

max_links_per_page = 6
max_links = 1000

links_to_explore = []
links_to_explore.append(current_url)
found_links.add(current_url)

print "vai comecar a descobrir os links"

while len(found_links) < max_links:
	current_url = links_to_explore.pop(0)
	page=urllib2.urlopen(base_url + current_url)
	soup = BeautifulSoup(page.read())
	links_in_page = 0
	links = soup.findAll('a')
	for link in links:
		href = link.get('href')
		if href and href.startswith('/wiki/') and not href.startswith('/wiki/Ficheiro:') and not href.startswith('/wiki/Discuss%C3%A3o:') and not href.startswith('/wiki/Ajuda') and not href.startswith('/wiki/Portal:') and not href.startswith('/wiki/Wikip%C3%A9dia:') and not href.startswith('/wiki/Especial:') and not href in found_links:
			found_links.add(href)
			links_to_explore.append(href)
			links_in_page += 1
			if links_in_page == max_links_per_page:
				break

print "descobriu " + str(len(found_links)) + " links"


cfd = ConditionalFreqDist()
global_fd = FreqDist()

# For each token, count current word given previous word
prev_word = None

#with open('samba.txt','r') as f:
#	for line in f:
#		for word in filter(None, re.split("[,.;\"\[\]() \-!?\d:]+", text)):
#			word = unicode(word.decode("latin-1"))	
#			cfd[prev_word][word]+=1
#			global_fd[word] += 1
#			prev_word = word

print "vai comecar a construir distribuicao de probabilidades"
for link in found_links:
	page=urllib2.urlopen(base_url + link)
	soup = BeautifulSoup(page.read())
	content = soup.findAll('p');

	for paragraph in content:
		text = paragraph.text
		for word in filter(None, re.split("[,.;\"\'′/*\+\[\]()<>={}%#&$@·•«»►⊆≥≤≠≈∞∈→↑←ℝ€₣…†“” \-!?\d:]+", text)):
			word = unicode(word)	
			cfd[prev_word][word]+=1
			global_fd[word] += 1
			prev_word = word

print "terminou distrib probabilidades"

print "vai construir as listas com o formato pro SQLite"
global_frequencies = []
for word in sorted(global_fd.keys()):
	global_frequencies.append((word, global_fd[word]))

conditional_frequencies = []
for condition in sorted(cfd.conditions()):
	for word in sorted(cfd[condition].keys()):
		if condition:
			conditional_frequencies.append((condition, word, cfd[condition][word]))
	

print "vai comecar a parte do banco de dados"
con = lite.connect("words-pt.db")		

with con:
	cur = con.cursor()
	cur.execute("DROP TABLE IF EXISTS _1_gram")
	cur.execute("CREATE TABLE _1_gram(word TEXT, count INT)")
	cur.executemany("INSERT INTO _1_gram VALUES(?, ?)", tuple(global_frequencies))

	cur.execute("DROP TABLE IF EXISTS _2_gram")
	cur.execute("CREATE TABLE _2_gram(word_1 TEXT, word TEXT, count INT)")
	cur.executemany("INSERT INTO _2_gram VALUES(?, ?, ?)", tuple(conditional_frequencies))

print "aeeee"