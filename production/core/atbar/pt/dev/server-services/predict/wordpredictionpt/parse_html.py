from bs4 import BeautifulSoup
import urllib2
import re


url="https://pt.wikipedia.org/wiki/Carnaval"
page=urllib2.urlopen(url)
soup = BeautifulSoup(page.read())
#universities=soup.findAll('a',{'class':'institution'})
#for eachuniversity in universities:
#	print (eachuniversity['href']+","+eachuniversity.string).encode('UTF-8')

content = soup.findAll('p');

#print soup.get_text().encode('UTF-8')
for paragraph in content:
	text = paragraph.text
	for word in filter(None, re.split("[,.;\"\[\]() \-!?\d:]+", text)):
		print word
		