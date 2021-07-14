from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey 

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

response = []

@app.route('/')
def start_point():
    return render_template("Survey_start.html", satisfaction_survey = satisfaction_survey)



@app.route("/question/<int:q_num>")
def question_stuff(q_num):
    if (len(response) != q_num):
        flash(f"invalid question num:{q_num}")
        return redirect(f"/question/{len(response)}")
    
    else:
        question = satisfaction_survey.questions[q_num]
        return render_template("question.html", question_num=q_num,question=question)

@app.route("/answer", methods=["POST"])
def save_answer():
    choice = request.form['answer']
    response.append(choice)
    
    if (len(response) == len(satisfaction_survey.questions)):
        return redirect("/complete") 
    else:
        return redirect(f"/question/{len(response)}")

@app.route("/complete")
def complete():
    return render_template("complete.html")

# @app.route("/question/<int:qid>", method=["POST"])
# def question(qid):
#     question = satisfaction_survey.questions[qid]
#     return render_template("question.html", question_num=qid,question=question)


