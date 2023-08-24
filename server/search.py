import imdb


ia = imdb.Cinemagoer()
# movies = ia.search_movie("Harry")
# for i in range(len(movies)):

#     # getting the id
#     id = movies[i].movieID
#     print(movies[i])
#     # printing it
#     print(movies[i]['title'] + " : " + id)

search = ia.get_movie_parents_guide('0241527')
print(search)
