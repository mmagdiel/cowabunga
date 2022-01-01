# Cowabunga:

A pizza restaurant manager

## Develop it

Write On project base root:

```bash
git clone [your_favorite_cloning_method]
cd backend
json-server --watch db.json
cd ..
cd frontend
npm install
gatsby develop
```

## Project Architecture

It was used gatsby for the implementation.

The project is based on Domain Driven Design (DDD), but with a few exceptions.

- The _infraestrure_ layer has been renamed to **data** layer.
- The _application_ layer has been renamed to **deal** layer.
- The _domain_ layer hasn't been renamed.
- The _dumbs_ layer for dumbs components, has ben renamed to **view** layer.

The information flow starts in the _data layer_ and continues via the _deal layer_, the _domain layer_ contains the application's core logic.
