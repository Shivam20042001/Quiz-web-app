* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, #08203e, #557c93);
    color: #fff;
    display: grid;
    place-items: center;
}

.container {
    width: 80%;
    max-width: 850px;
    padding: 30px;
    text-align: center;
    display: none;
}

.container h1 {
    font-size: 36px;
    margin-bottom: 40px;
    text-decoration: underline;
    text-underline-offset: 8px;
}

.container .question {
    font-size: 26px;
    margin-top: 20px;
}

.container .choices {
    margin-top: 20px;
}

.choice {
    font-size: 20px;
    background-color: #eee;
    color: #000;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    width: 60%;
    cursor: pointer;
    opacity: 0;
    transform: translateY(50%);
    animation: fade-in 0.5s ease forwards;
}

.choice:hover{
    background-color: #ddd;
}

.choice.selected{
    background-color: #007bff;
    color: #fff;
}

.btn{
    width: 60%;
    font-size: 20px;
    font-weight: 600;
    padding: 12px 20px;
    margin: 20px auto 0 auto;
    background-color: #006400;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover{
    background-color: #08780c;
}

.scoreCard{
    font-size: 24px;
    margin-top: 20px;
}

.alert{
    background-color: #5d9b63;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    position: absolute;
    top: 0;
    display: none;
}

.startBtn{
    width: 15%;
    padding-block: 20px;
    text-align: center;
}

.timer{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #08203e;
    border: 2px solid #f00;
    font-size: 24px;
    font-weight: 600;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: pulse 1s ease-in-out infinite;
}

/* Adding Animation to Timer */
@keyframes pulse{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}

/* Adding Animation to choices */
@keyframes fade-in{
    0%{
        opacity: 0;
        transform: translateY(50%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width:900px){
    .container {
        width: 100%;
        margin-top: 50px;
    }
    .container h1{
        font-size: 24px;
    }
    .container .question{
        font-size: 22px;
    }

    .timer{
        width: 50px;
        height: 50px;
        font-size: 20px;
    }

    .startBtn{
        width: 50%;
    }
}
