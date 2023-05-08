const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')
const head = document.getElementById('head')
const details = document.getElementById('details')



class about {
    constructor(title, info) {
        this.title = title;
        this.info = info;
    }
}

const seek = new about(
    'Seeking Help',
    `Mental health concerns can have a significant impact on an individual's daily life, including their relationships, work, and overall well-being. Seeking help for these concerns can provide numerous benefits, both in the short and long term. \n\n\
    One of the primary benefits of seeking help is gaining a better understanding of one's symptoms and diagnoses. Many mental health concerns can be confusing and overwhelming, and seeking help can provide clarity and insight into what is happening. This can help individuals feel more in control and less anxious about their mental health. \n\n\
    In addition, seeking help can provide access to effective treatments that can alleviate symptoms and improve quality of life. For example, therapy can help individuals develop coping skills and strategies to manage their symptoms, while medication can provide relief from symptoms such as depression or anxiety. Seeking help early on can also prevent symptoms from worsening and reduce the likelihood of more severe mental health concerns developing. \n\n\
    Furthermore, seeking help can provide a safe and supportive environment to discuss personal concerns and challenges. This can lead to a greater sense of self-awareness and self-acceptance, as individuals learn to better understand their thoughts and emotions. Therapy and support groups can also provide opportunities to connect with others who may be going through similar experiences, which can be a source of comfort and validation. \n\n\
    Another important benefit of seeking help is reducing the stigma associated with mental health concerns. Many individuals may be hesitant to seek help due to the fear of being labeled as "crazy" or "weak." However, seeking help can help to promote a more open and accepting society, where mental health concerns are recognized as a normal part of the human experience. \n\n\
    Ultimately, seeking help for mental health concerns can lead to improved mental health and overall well-being. It can provide a sense of empowerment and control over one's mental health, as well as access to effective treatments and support systems. While it can be difficult to take the first step in seeking help, it is an important and courageous decision that can have a positive impact on one's life.`
);

const anx = new about(
    'Anxiety',
    "Anxiety is a natural response to stress and is a normal part of life. It's our body's way of responding to a threat, and it can help us stay alert and focused. However, when anxiety becomes overwhelming or chronic, it can interfere with daily life and become a mental health disorder. Anxiety disorders are the most common mental health disorders in the United States, affecting approximately 40 million adults. \n\n\
    There are different types of anxiety disorders, including generalized anxiety disorder, social anxiety disorder, panic disorder, and specific phobias. Symptoms of anxiety can include excessive worry, restlessness, irritability, muscle tension, difficulty sleeping, and physical symptoms like sweating or rapid heartbeat. Treatment for anxiety can include therapy, medication, or a combination of both. Learning coping skills like mindfulness, deep breathing, and exercise can also help manage anxiety. It's important to seek help from a mental health professional if you're struggling with anxiety, as they can provide guidance and support to help you manage your symptoms. \n\n\
    Anxiety can be triggered by a variety of factors, including genetics, brain chemistry, and life experiences. Traumatic events, major life changes, and chronic stress can all contribute to the development of anxiety disorders. While anxiety can be a difficult and overwhelming experience, it's important to remember that it's treatable. Seeking help from a mental health professional can be a crucial step in managing anxiety and improving overall well-being. Additionally, practicing self-care and healthy habits like getting enough sleep, eating well, and exercising regularly can also help reduce symptoms of anxiety. With the right treatment and support, it's possible to live a fulfilling life while managing anxiety."
);

const dep = new about(
    'Depression',
    `Depression is a serious mental health condition that can significantly impact a person's life. It is characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities that were once enjoyable. Depression can also cause physical symptoms, such as fatigue, changes in appetite, and difficulty sleeping. There are different types of depression, including major depressive disorder, dysthymia, and bipolar disorder. \n\n\
    It is essential to seek professional help if you think you might be experiencing depression. Treatment options for depression typically include medication, therapy, or a combination of both. Cognitive-behavioral therapy is a common type of therapy used to treat depression, which helps individuals identify and change negative patterns of thinking and behavior. Additionally, lifestyle changes such as regular exercise, a healthy diet, and getting enough sleep can also help improve symptoms of depression. \n\n\
    Support from loved ones can also play a significant role in managing depression. Encouragement and understanding from family and friends can help individuals feel less alone and more motivated to seek treatment. It's important to remember that depression is a treatable condition, and with the right support and resources, individuals can recover and regain a sense of control over their lives.`
);

const bipolar = new about(
    'Bipolar Disorder',
    `Bipolar disorder is a mental health condition characterized by extreme mood swings, including periods of depression and mania. During a depressive episode, a person with bipolar disorder may feel hopeless, sad, and lose interest in things they used to enjoy. During a manic episode, they may feel elated, talkative, and have increased energy. However, manic episodes can also be dangerous as the person may engage in risky behavior or have delusions of grandeur. Bipolar disorder is a lifelong condition, but with proper treatment, people with the disorder can lead fulfilling lives. \n\n\
    The exact cause of bipolar disorder is not fully understood, but it is believed to be a combination of genetic and environmental factors. Some studies suggest that imbalances in certain brain chemicals, such as dopamine and serotonin, may play a role in the development of bipolar disorder. Other factors that may contribute to the disorder include stressful life events, substance abuse, and a family history of bipolar disorder. \n\n\
    Treatment for bipolar disorder typically involves a combination of medication and therapy. Mood stabilizers are commonly prescribed to help control manic and depressive episodes, while antidepressants may also be used during depressive episodes. Therapy, such as cognitive-behavioral therapy, can help individuals with bipolar disorder learn coping skills and manage their symptoms. It is important for individuals with bipolar disorder to have a strong support system and to work closely with their healthcare providers to manage their condition.`
);

const ptsd = new about(
    'Post-traumatic Stress Disorder',
    `Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. Traumatic events can include but are not limited to physical or sexual assault, combat, natural disasters, and serious accidents. People with PTSD may experience a range of symptoms such as re-experiencing the trauma through flashbacks, nightmares or intrusive thoughts; avoidance of reminders of the trauma; negative changes in thoughts or mood, including feelings of isolation, guilt or shame; and hyperarousal, such as feeling constantly on edge or easily startled. \n\n\
    PTSD can affect anyone, regardless of age, gender, race or background. However, certain factors may increase the likelihood of developing PTSD, including a history of mental health issues, prior traumatic experiences, and lack of social support. PTSD can be diagnosed by a mental health professional and treatment options include therapy, medication, and support groups. It's important to note that seeking help for PTSD is a sign of strength and can significantly improve one's quality of life. \n\n\   
    It's also important to note that while PTSD is a serious condition, recovery is possible. With the right treatment and support, people with PTSD can learn to manage their symptoms and lead fulfilling lives. It's important to raise awareness about PTSD and reduce stigma around seeking help, as many people with PTSD may feel ashamed or alone. Education about PTSD can help break down these barriers and ensure that those who need help are able to access it."`
);

const ocd = new about(
    'Obsessive-Compulsive Disorder',
    `Obsessive-Compulsive Disorder (OCD) is a mental health condition that affects millions of people around the world. It is characterized by recurring, intrusive thoughts or images (obsessions) that cause distress and anxiety, as well as repetitive behaviors or mental acts (compulsions) that individuals perform to reduce this distress. OCD can manifest in many different ways and can impact various areas of life, such as work, school, and relationships. \n\n\
    People with OCD may engage in a wide range of compulsions, such as excessive cleaning, counting, checking, or organizing. These compulsions may provide temporary relief, but they can also interfere with daily functioning and take up a lot of time and energy. Additionally, individuals with OCD may experience a lot of shame and guilt related to their obsessions and compulsions, which can make it difficult to seek help. \n\n\
    Treatment for OCD typically involves a combination of medication and therapy, such as cognitive-behavioral therapy (CBT) or exposure and response prevention (ERP). These treatments can help individuals with OCD learn to manage their symptoms, reduce their anxiety, and improve their quality of life. With the right support and treatment, many people with OCD are able to live fulfilling, meaningful lives.`
);


// const about_details = require('../scripts/about.json');
// console.log(about_details);

this.addEventListener("DOMContentLoaded", preloadImages, true);

function preloadImages(e) {
    var imageArray = new Array("images/anxiety.png", "images/bipolar.png", "images/depression.png", "images/help.png", "images/mind.png", "images/ocd.png", "images/ptsd.png");

    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.src = imageArray[i];
    }
}

const anxT = ""

fetch('../scripts/about.json')
    .then(res => res.json())
    .then(about_details => {
        console.log(about_details);
    })


card1.addEventListener("click", function handleClick() {
    head.innerText = (seek.title);
    details.innerText = (seek.info);
})

card2.addEventListener("click", function handleClick() {
    head.innerText = (anx.title);
    details.innerText = (anx.info);
})

card3.addEventListener("click", function handleClick() {
    head.innerText = (dep.title);
    details.innerText = (dep.info);
})

card4.addEventListener("click", function handleClick() {
    head.innerText = (bipolar.title);
    details.innerText = (bipolar.info);
})

card5.addEventListener("click", function handleClick() {
    head.innerText = (ptsd.title);
    details.innerText = (ptsd.info);
})

card6.addEventListener("click", function handleClick() {
    head.innerText = (ocd.title);
    details.innerText = (ocd.info);
})

function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* Integrating Google Translate into the navigation bar */

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );
}