 # -*- coding: utf-8 -*-

import sys
from nltk.corpus import gutenberg
from nltk.probability import ConditionalFreqDist
from nltk.probability import FreqDist
from random import choice
import re
import operator
import sqlite3 as lite

reload(sys)
sys.setdefaultencoding('UTF-8')

def get_suggestion(args):
	#Output must be a string in the following format: "0+input_word;;freq1+suggestion1;freq2+suggestion2;"

	#input text
	leading_text = args[1].lower()
	#tokenise input text (get individual words)
	leading_text_list = filter(None, re.split("[,.;\"() \-!?:]+", leading_text))

	word = "" #the last complete word
	current_word = "" #the word that the user is typing
	first_letter = True
	if len(leading_text_list) > 0:

		#try:

		if leading_text[-1] == " ":
			word = leading_text_list[-1]#.decode('UTF-8').encode('latin-1') #in this case, the user have finished a word
			if leading_text[-2] != ".":
				first_letter = False

		else:
			current_word = leading_text_list[-1]#.decode('UTF-8').encode('latin-1')
			if (len(leading_text_list) >= 2):
				word = leading_text_list[-2]#.decode('UTF-8').encode('latin-1')
				#if leading_text[len(word)] != ".":
				if "." not in leading_text[len(word):(len(leading_text)-len(current_word))]:
					first_letter = False
		#except:
		#	if leading_text[-1] == " ":
		#		word = leading_text_list[-1].decode('latin-1') #in this case, the user have finished a word
		#	else:
		#		current_word = leading_text_list[-1].decode('latin-1')
		#		if (len(leading_text_list) >= 2):
		#			word = leading_text_list[-2].decode('latin-1')

	

	con = lite.connect("words-pt.db")
	con.text_factory = str

	with con:

		command_string = None
		empty_string = None
		if word == "":
			command_string = u"SELECT word,count FROM _1_gram WHERE word LIKE ? ORDER BY -count LIMIT 12".encode('UTF-8')
			empty_string = True

		else:
			command_string = u"SELECT word,count FROM _2_gram WHERE word_1=? AND word LIKE ? ORDER BY -count LIMIT 12".encode('UTF-8')
			empty_string = False

		#will be parsed by the JavaScript function
		output = None
		#try:
		output = "0" + current_word + ";;"
		#except:
		#	output = u"0".encode('UTF-8') + current_word.encode('UTF-8') + u";;".encode('UTF-8')
		
		current_word += "%" #wildcard
	
		cur = con.cursor()
		
		if empty_string:
			cur.execute(command_string, (current_word,))
		else:
			cur.execute(command_string, (word, current_word))

		rows = cur.fetchall()
		
		i = 0 #used to fix a bug in JavaScript (word counts with more than 2 digits would be partially displayed)
		max_suggestions = 6

		suggestions = set()

		for row in rows:
			suggestion_word = row[0]
			suggestion_count = row[1]
			if suggestion_count > 9 - i:
				suggestion_count = 9 - i

			if suggestion_word.lower() not in suggestions:
				suggestions.add(suggestion_word.lower())
				if first_letter:
					suggestion_word = suggestion_word.title()
				output += str(suggestion_count).encode('UTF-8')
				output += suggestion_word.encode('UTF-8')
				output += u";".encode('UTF-8')
				i += 1
				if i >= max_suggestions:
					break


	#output = "0Hel;;8hello;8he's;8her;8here;8here's;7he'll;"
	return output

print get_suggestion(sys.argv)