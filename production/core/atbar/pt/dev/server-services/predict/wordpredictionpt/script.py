import sys
from nltk.corpus import gutenberg
from nltk.probability import ConditionalFreqDist
from random import choice
import re
import operator


def get_suggestion(args):
	#Output must be a string in the following format: "0+input_word;;freq1+suggestion1;freq2+suggestion2;"
	output = "0Hel;;8hello;8he's;8her;8here;8here's;7he'll;"

	leading_text = args[1].lower()

	# Create distribution object
	cfd = ConditionalFreqDist()

	# For each token, count current word given previous word
	prev_word = None
	for word in gutenberg.words('austen-persuasion.txt'):
		cfd[prev_word][word]+=1
		prev_word = word


	# Start predicting at the given word, say 'therefore'
	leading_text_list = filter(None, re.split("[, \-!?:]+", leading_text))

	f = open("log_python.txt","w")
	for w in leading_text_list:
		f.write(w)
		f.write("\n")
	f.write(str(len(leading_text_list)))
	f.write("\n")
	f.write(leading_text_list[-2])
	f.close()

	word = ""
	current_word = leading_text_list[-1]
	if (len(leading_text_list) >= 2):
		word = leading_text_list[-2]
	else:
		word = ""
	
	fd = cfd[word]
	sorted_fd = sorted(fd.items(), key=operator.itemgetter(1), reverse=True)

	max_suggestions = 6

	output = "0" + current_word + ";;"
	i = 0
	for j in range(len(sorted_fd)):
		suggestion_word = sorted_fd[j][0]
		suggestion_freq = sorted_fd[j][1]
		output += str(suggestion_freq) + suggestion_word + ";"
		i += 1
		if i > max_suggestions: 
			break

	f = open("log_pythonoutput.txt","w")
	f.write(output)
	f.close()

	#output = "0Hel;;8hello;8he's;8her;8here;8here's;7he'll;"
	return output

print get_suggestion(sys.argv)