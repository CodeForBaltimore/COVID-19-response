# ProjectTemplate
The project template for Code for Baltimore github projects.  This project will help your project get started by giving you:
* A standard issues template
* A standard pull request
* A standard docs folder with example documentation.
* A big thumbs up :thumbsup:

## Documentation
We've included a `docs` folder with a template [Tech Spec](/docs/Tech_Spec.md) and [Best Practices](/docs/Best_Practices.md) document, though using Github's Wiki capabilities is also a good idea. This will get you started with documenting your project.  Other documents and relevant information that has no other place can live in the `docs` folder.  Replace this paragraph with a brief breakdown of what you've included in your `docs` folder.

## Setup
To start, have `node12`+  and `npm` installed. You may also need `aws-cli` installed and a `local` config added. The Key and Secret can be any words, they just have to exist.
Then run : 
```bash
npm install

sls dynamodb install

# or :
sls dynamodb install --localPath ./dynamodb

```
You will need an `.env` file created with certain values filled in. 
```bash
touch .env
echo 'NODE_ENV=local
STAGE=local
REGION=localhost
ENDPOINT=http://localhost:4000
DEFAULT_ACCESS_KEY=<whatever key you want>
DEFAULT_SECRET=<whatever secret you want>
' >> ./.env
```
To spin up the backend locally run
```bash
sls offline start
```

To run the front-end application run 
```bash
npm start
```
## Using this product
How would someone use this product? Give a few examples here.

## Testing
What does someone need to do to test their work? Have you included a specific testing framework or guideline (hint: you should)? Any information about testing should be added here.

## Sources and Links
If referencing any third party service, code, etc, cite it here.

This template is in use on a number of other Code for Baltimore projects. For examples of use in various ways, please see the followings examples:


<p align="center">
    <img src="docs/img/CfB.png" width="400">
</p>