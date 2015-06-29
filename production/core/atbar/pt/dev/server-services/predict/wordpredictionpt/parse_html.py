from bs4 import BeautifulSoup
import urllib2
import re


url="https://pt.wikipedia.org/wiki/Carnaval"
page=urllib2.urlopen(url)
soup = BeautifulSoup(page.read())
#universities=soup.findAll('a',{'class':'institution'})
#for eachuniversity in universities:
#	print (eachuniversity['href']+","+eachuniversity.string).encode('UTF-8')

#content = soup.findAll('p');

#print soup.get_text().encode('UTF-8')
#for paragraph in content:
#	text = paragraph.text
#	for word in filter(None, re.split("[,.;\"\[\]() \-!?\d:]+", text)):
#		print word

#i = 0
#links = soup.findAll('a')
#for link in links:
#	href = link.get('href')
#	if href and href.startswith('/wiki/') and not href.startswith('/wiki/Ficheiro:') and not href.startswith('/wiki/Discuss%C3%A3o:'):
#		print link.get('href')
#		i += 1
#		if i == 20:
#			break

base_url = "https://pt.wikipedia.org"
current_url = "/wiki/Brasil" #the initial URL

found_links = set()

max_links_per_page = 6
max_links = 100

links_to_explore = []
links_to_explore.append(current_url)
found_links.add(current_url)

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

print "acabou de pegar os links"
print "quantidade = " + str(len(found_links))
for link in found_links:
	print link