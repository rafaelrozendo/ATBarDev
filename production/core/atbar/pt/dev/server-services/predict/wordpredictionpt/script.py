 # -*- coding: utf-8 -*-

import sys
from nltk.corpus import gutenberg
from nltk.probability import ConditionalFreqDist
from nltk.probability import FreqDist
from random import choice
import re
import operator

#reload(sys)
#sys.setdefaultencoding('latin-1')

def get_suggestion(args):
	#Output must be a string in the following format: "0+input_word;;freq1+suggestion1;freq2+suggestion2;"

	leading_text = args[1].lower()

	# Create distribution object
	cfd = ConditionalFreqDist()
	global_fd = FreqDist()

	# For each token, count current word given previous word
	prev_word = None
	#for word in gutenberg.words('austen-persuasion.txt'):
	with open('samba.txt','r') as f:
		for line in f:
			for word in line.split():	
				cfd[prev_word][word]+=1
				global_fd[word] += 1
				prev_word = word


	leading_text_list = filter(None, re.split("[,.;\"() \-!?:]+", leading_text))


	word = ""
	current_word = ""
	if leading_text[-1] == " ":
		word = leading_text_list[-1].decode('UTF-8').encode('latin-1')
	else:
		current_word = leading_text_list[-1].decode('UTF-8').encode('latin-1')
		if (len(leading_text_list) >= 2):
			word = leading_text_list[-2].decode('UTF-8').encode('latin-1')
	
	fd = None
	if word != "":
		fd = cfd[word]
	else:
		fd = global_fd

	sorted_fd = sorted(fd.items(), key=operator.itemgetter(1), reverse=True)

	max_suggestions = 6
	i = 0


	output = u"0".encode('UTF-8') + current_word.decode('latin-1').encode('UTF-8') + u";;".encode('UTF-8')

	for j in range(len(sorted_fd)):
		suggestion_word = sorted_fd[j][0]
		if suggestion_word.lower().startswith(current_word):
			suggestion_freq = sorted_fd[j][1]
			if suggestion_freq > 9 - i:
				suggestion_freq = 9 - i
			output += str(suggestion_freq).encode('UTF-8') + suggestion_word.decode('latin-1').encode('UTF-8') + u";".encode('UTF-8')
			i += 1
			if i >= max_suggestions: 
				break
	

	#output = "0Hel;;8hello;8he's;8her;8here;8here's;7he'll;"
	return output

print get_suggestion(sys.argv)