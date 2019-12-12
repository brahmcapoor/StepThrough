import React from 'react';

export const ABOUT_STEPTHROUGH = (
    <div>
        <p>
            This project presents <i>StepThrough</i>, an interactive debugging 
            tutorial targeted at students in CS 106A or an equivalent 
            CS1-level course. 
        </p>
        <p>
            At this stage in their programming careers, students often 
            lack intuition as to how to systematically approach debugging 
            and reasoning about programs that are misbehaving or otherwise 
            incorrect. Often, this manifests in their process by randomly
            perturbing portions of their code they suspect are incorrect 
            or simply starting from scratch. 
        </p>
        <p>
            In my experience, these practices are the consequence of a lack
            of exposure to common debugging techniques: <code>print </code> 
            debugging and parsing error messages, for example. During office 
            hours, when I walk a student through either of these processes,
            their most common reaction is to be shocked that such simple 
            actions can significantly facilitate the debugging process. 
            While this teaching is effective, it is limited by the infrequency
            with which students come to office hours, as well as a lack 
            of 'replayability': when attempting to solve their own bugs 
            later on, a student can only consult their own memory of 
            my help or any notes they took.
        </p>
        <p>
            <i>StepThrough</i> is in principle an attempt to remove such 
            limitations. It operates as a web application that could 
            be posted on a course website or section handout, which students
            are free to visit whenever they feel the need to do so. Additionally, 
            it can be used either as a core part of course material or simpply a 
            supplement to students having particular difficulties with debugging. 
        </p>

        <p>
            The <i>Pedagogy</i> and <i>Roadmap</i> tabs on this page outline 
            in more detail the educational decisions made in this demo, as well 
            as plans for future development on this project. Alternatively, click 
            <i>Start Learning</i> to begin the demo. 
        </p>
    </div>
);

export const PEDAGOGY = (
    <div>
        <p>
            Two key pedagogical decisions presented themselves in the
            course of this project. The first was to identify the 
            initial problem to tackle as a proof of concept. Once this 
            decision made, I then needed to figure out how best to 
            walk students through the debugging process.  
        </p>
        <h4>
            Choosing what to teach 
        </h4>
        <hr />
        <p>
            Upon deciding to work on this project, I decided that the 
            initial version of <i>StepThrough</i> should target the 
            debugging task that students encounter first. After reflecting 
            on this-and discussing it with some of the students in 
            CS 106A this quarter-it seemed clear that the first 
            big debugging hurdle for students was what to do upon 
            encountering an error message. 
        </p>
        <p>
            Interestingly, this isn't the first kind of bug a student is 
            likely to encounter in CS 106A. However, the playground-like 
            environments of Karel or Bit that students begin with in CS 
            106A are particularly good at emphasizing the debugging process. 
            When a student's robot doggedly forges into the walls of the 
            world, the student generally has a good sense of what part of the 
            code might be causing this misbehaviour: the graphical, stepwise 
            nature of the program emphasizes this understanding of what each 
            line of code's responsibility is. This intuition often does not 
            translate to subsequent programs in which the thread of execution 
            is not as visually apparent. 
        </p>
        <p>
            In such programs, mistakes often manifest as error messages
            indicating, for example, that a student is attempting to call 
            a method on an object with an incorrect type or trying to 
            access something out of the bounds of a particular data structure. 
            While undoubtedly helpful, these errors often look unfriendly and as 
            a result, students frequently overlook them. 
        </p>
        <p>
            At a high level, thus, the tutorial proceeds by presenting students 
            with an incorrect program that produces an error message and walking 
            them through the process of converting that error message into 
            actionable cognitive feedback on what parts of their code might 
            be incorrect. 
        </p>
        <h4>
            Deciding how to teach it
        </h4>
        <hr /> 
        <p>
            My pedagogical approach to reviewing error messages drew inspiration 
            from the introductory playgrounds students encounter in CS 106A. In  
            such assignments, students generally have a good sense of the purpose 
            of each line of code and how it relates to the behaviour of the program. 
            Consequently, when something went wrong, the progam itself provided 
            evidence as to which portion of code was incorrect. 
        </p>
        <p>
            In the context of error messages, students must collect evidence 
            not just from the output of the program (of which there is precious 
            little), but also the error message itself. Thus, the first part of  
            the tutorial follows this process:
        </p>
        <ol>
            <li>
                <p>
                    <b>An overview of error messages:</b> Specifically, that they are 
                    Python's attempt to provide as much helpful information as 
                    they can about what went wrong to cause a crash.
                </p>
            </li>
            <li>
                <p>
                    <b>Reviewing the anatomy of an error message</b>: That the 
                    two key portions of an error message are the exception itself 
                    and the traceback. In particular, each pair of lines in the 
                    traceback points at a specific line of code in the call stack 
                    and each provides a distinct kind of evidence as to the program's 
                    state at the point of the crash. 
                </p>
            </li>
        </ol>
        <p>
            At each point of this process, I also highlight the lines of interest 
            in both the error message and the code itself. Following this, the 
            tutorial shifts gear to actually fixing the bug in the program. It 
            once again presents this process as having the goal of collecting 
            evidence to correctly deduce what might be going wrong. In order to 
            do so, I introduce the process of <code>print </code> debugging as a 
            way to reveal portions of a program's state that might be of interest.
        </p>
        <ol start="3">
            <li>
                <p>
                    <b>Deciding what other evidence we need:</b> While an error
                    message provides useful information on <i>where</i> in a 
                    program the crash is happening, it doesn't always tell us 
                    <i>when</i>. If the crash happens in a loop, for example, it 
                    may not be clear which iteration of the loop it occurs in.
                </p> 
            </li>
            <li>
                <p> 
                    <b><code>print</code> debugging:</b> Specifically, printing 
                    the index variable in a <code>for</code> loop to see at which 
                    specific iteration the program crashed. 
                </p>
            </li>
        </ol>
    </div>
);

export const ROADMAP = (
    <div>
        <p>
            The roadMap for <i>StepThrough</i> is divided into three 
            portions: the short-term, the long-term, and stretch goals. 
        </p>
        <h4>Short-term Roadmap</h4>
        <hr />
        <p>
            I have several specific short-term goals that I'm shooting 
            to have completed by the beginning of Winter Quarter. These 
            culminate with deploying <i>StepThrough</i> for CS 106A next quarter. 
            In order to meet that goal, several subgoals must be met. Most of these
            aren't technical, but rather pedagogical to make sure this can genuinely 
            provide utility to students. 
        </p>
        <ul>
            <li>
                <p>
                    <i>Developing additional tutorials:</i> In addition to
                    the error message tutorial-which will be refined-my goal 
                    is to also have tutorials covering debugging programs 
                    which do not crash, but have incorrect output, and also 
                    a quick tutorial covering how to fix syntax issues 
                    (which I can imagine being useful at the beginning of the 
                    course). 
                </p>
            </li>
            <li>
                <p>
                    <i>Additional Verbiage:</i> Building a student-facing 
                    landing page that outlines the different ways they can use 
                    <i> StepThrough</i>. 
                </p>
            </li>
        </ul>
        <h4>Long-term Roadmap</h4>
        <hr />
        <p>
            In the long-term, I envision <i>StepThrough</i> acting as something of a 
            debugging 'playground': an environment in which students with debugging 
            issues can familiarize themselves with their issue in an environment 
            which guides them through the process. This is achieved through a
            combination of long-term and stretch goals.
        </p>
        <p>
            The long-term goals, which I hope to have achieved by the end of next 
            quarter are mostly technical, and are as follows:
        </p>
        <ul>
            <li>
                <p>
                    <i>Building an execution backend</i>: Currently, 
                    <i> StepThrough </i> is very staged: the tutorials, 
                    programs and program output are all hardcoded. 
                    However, I would eventually like for students to be 
                    able to make arbitrary modifications to the tutorial code 
                    and be able to execute it to see how it helps them debug. 
                </p>
                <p>
                    This involves writing a backend that can accept 
                    arbitrary Python code and execute it and return the output 
                    or error messages. Writing a system that can do this 
                    securely is complex, but important to get right, since 
                    most of my other long-term and stretch goals require such a 
                    backend.
                </p>
            </li>
            <li>
                <p>
                    <i>Rubric sampled programs</i>: Rather than just relying on 
                    hardcoded incorrect programming, I'd like to be able to use
                    Rubric sampling to produce a large number of programs with 
                    labels for their mistakes. Ideally, upon a student beginning 
                    a debugging tutorial, <i>StepThrough</i>'s backend would 
                    sample a new program-mistakes and the client would be able 
                    to walk a student through debugging it. 
                </p>
                <p>
                    Such a system requires a compromise: in order to generate 
                    problems on the fly, the walkthrough itself might not be 
                    able to make as specific a reference to the details of the 
                    solution, other than parsing line numbers from error messages. 
                    However, these more generic tutorials might complement the more
                    curated ones, providing practice once a student has been 
                    through a few guided demonstrations. 
                </p>
            </li>
        </ul>
        <h4>Stretch Goals</h4>
        <hr />
        <p>
            These goals-as their name suggests-are less well-formed, but will 
            hopefully be further actualized in the longness of time. 
        </p>
        <ul>
            <li>
                <p>
                    <i>Providing assignment help:</i> Providing the option 
                    for students to paste buggy assignment code into 
                    <i>StepThrough</i>, and being walked towards a solution.
                </p>
            </li>
            <li>
                <p>
                    Support for other programming languages
                </p>
            </li>
        </ul>
    </div>
);