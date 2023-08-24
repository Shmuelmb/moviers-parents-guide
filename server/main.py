from fastapi import FastAPI
import imdb
from fastapi.middleware.cors import CORSMiddleware
ia = imdb.Cinemagoer()
# uvicorn main:app --reload
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/search-movie/{search_content}")
def search_movie_by_text(search_content):
    movies = ia.search_movie(search_content)
    result = [{'title': movies[i]['title'], 'id':movies[i].movieID}
              for i in range(len(movies))]
    return {'result': result}


@app.get("/get-parents-guide-by-id/{id}")
def search_parents_guide_by_id(id):
    parents_guide = ia.get_movie_parents_guide(id)
    parents_guide_data = {}
    for key in parents_guide['data']:
        if key.startswith('advisory') and type(parents_guide['data'][key]) is list:
            parents_guide_data[key] = parents_guide['data'][key]
    return parents_guide_data
