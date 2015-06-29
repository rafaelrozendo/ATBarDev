import sqlite3 as lite
import sys

from bs4 import BeautifulSoup
import urllib2
from nltk.probability import ConditionalFreqDist
from nltk.probability import FreqDist
import re

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

url="https://pt.wikipedia.org/wiki/Carnaval"
page=urllib2.urlopen(url)
soup = BeautifulSoup(page.read())
content = soup.findAll('p');

for paragraph in content:
	text = paragraph.text
	for word in filter(None, re.split("[,.;\"\[\]() \-!?\d:]+", text)):
		word = unicode(word)	
		cfd[prev_word][word]+=1
		global_fd[word] += 1
		prev_word = word


global_frequencies = []
for word in sorted(global_fd.keys()):
	global_frequencies.append((word, global_fd[word]))

conditional_frequencies = []
for condition in sorted(cfd.conditions()):
	for word in sorted(cfd[condition].keys()):
		if condition:
			conditional_frequencies.append((condition, word, cfd[condition][word]))
	

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