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


