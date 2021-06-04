![prettier](https://github.com/fictionbase/fictionbase-webui/actions/workflows/Prettier.yml/badge.svg)

# fictionbase-webui
fictionbase webUI

# Install

```
$ npm install
```

```
$ npm install -g @aws-amplify/cli
```

```
$ amplify init
? Initialize the project with the above configuration? (Y/n) Y
? Select the authentication method you want to use: AWS profile
? Please choose the profile you want to use seike460-sandbox

$ amplify add auth

Do you want to use the default authentication and security configuration? Default configuration
Warning: you will not be able to edit these selections.
How do you want users to be able to sign in? Username
Do you want to configure advanced settings? No, I am done.

$ amplify push


$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: fictionbasewebui
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? Yes
? Provide your schema file path: schema.graphql

$ amplify push
```
