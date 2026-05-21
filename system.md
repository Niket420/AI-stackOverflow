PROJECT : StackOverflow With New Functionality

PROBLEM:
    - lets people post question where they stuck and AI make it more mess , to let other developer solve this issue like community

ENTITY:
    - User
    - Question
    - Answer
    - Comment
    - QuestionTag
    - Tag
    - Vote


RELATIONSHIPS & CONSTRAINTS
	•	user can ask multiple questions
	•	user can post multiple answers to a question
	•	user can create multiple comments on questions or answers
    •	user can vote only once per question/answer but can update their vote
    •	user cannot vote on their own content (optional constraint)

	•	question can have multiple answers
	•	question can have multiple tags
    •	question can have only one accepted answer
	
	•	vote can be either an upvote or a downvote
	
	•	answer must belong to a question and a user

	•	comment must belong to either a question or an answer




APP FLOW
    
       Ask a question
            - user signup or login
            - click "ask question"
            - 


ROUTES

    - POST /auth/signup
    - POST /auth/login

    - POST   /questions              → create question
    - GET    /questions              → list questions
    - GET    /questions/{id}         → get single question

    - POST   /questions/{id}/answers → answer a question
    - GET    /questions/{id}/answers → get answers for a question

    - POST   /votes

    - POST   /questions/{id}/tags
    - GET    /tags

    


POST /questions
    request : {title : , description: }
    response : {id, title, description, createdBy, created At}

GET /questions
    response : {{list of all {ids,titles, descriptions,createdBy, createAt}}}

GET /questions/id
    response : {id,title,description,createdBy,createdAt}

POST /questions/{id}/answers
    request  : {content}
    response : {id, content, questionId, createdBy, createdAt}

GET /questions/{id}/answers
    response : {list of all {id, content, questionId, createdBy, createdAt}}

POST /votes:
    request  : {targetType, targetId, voteType}
    response : {id, targetType, targetId, voteType, createdBy}

POST /questions/{id}/tags:
    request: {tags}
    response: {questionId, tags}

GET /tags:
    response : [{id, name}]




