<h1 align="center">Pi Piper     |    The Back of House Restaurant Manager</h1>
<br/>

My senior project, Pi-Piper, set out to digitize how one of my local restaurants manages their back of house operations. For context, the restaurant I worked at and its two sibling restaurants are the businesses I was focused on, since I knew what had to be done and how the back of house functions. The back of the house mostly relies on paper for daily prep lists, weekly/monthly cleaning tasks, recipe books and otherwise. So I created an application using NEXT/Express web app intended to digitize all processes in the back of house for all three restaurants.

When I first had this idea, in the summer between my junior and senior year, I spent time in Bellingham. I landed a position as a grill cook at Chipotle. It was here where I was exposed to industry leading prep time series breakdown and analysis, and business insight integrated into every aspect of processes. They had each day mapped down to the minute from open to close. I found inspiration in the flexibility these programs offered their companies. It allowed them to plug in transfer management or employees with ease because of the standardized business practice ingrained into each location. This fueled my decision to create Pi Piper.
<hr/>


<p><b>Logical Architecture</b></p>
<table>
 <tr>
     <td style="color🍊">
      Backend
     </td>
     <td>
      Frontend
     </td>
 </tr>
 <tr>
  <td><img width="917" alt="Image" src="https://github.com/user-attachments/assets/6e7c36ca-cd83-4c2e-b69e-1971cf4722cd" />
</td>
  <td><img width="890" alt="Image" src="https://github.com/user-attachments/assets/2efe93e0-3ba0-4e3d-a0b7-cc1249534454" />
</td>
 </tr>
</table>


<h3 align="center">Want a detailed breakdown?</h3><br/>

_A video of me explaining some key features and talking about my approach to the project: <a href="https://www.youtube.com/watch?v=b8V_nrk_Flc">On Youtube</a>_

<br/>

_My report on how Pi Piper can help transform business practice: <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/ThePiperReport.pdf"><i>The Piper Report</i></a>_

<br/>

_View the design artifacts designed for this project: <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/docs.md#the-project-proposal-outlines-the-following-and-can-be-found-here"><i>Design Guide</i></a>_

<br/>

_In order to effectively browse the docs, view the overview below_

<br/>
<h1 align="left">The Design Process - the <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/docs.md#the-project-proposal-outlines-the-following-and-can-be-found-here">docs</a> is the home of most design artifacts</h1>

_Starting with the project proposal, this was completed back in September, as a first model of the idea and tech stack: <br><a href="">Project Proposal</a>(09/22/24)_


_Next is the project requirements artifact which outlined the libraries and first GUI drawings: <a href="">Project Requirements </a>(10/10/24)_


_Finally is the Project Design artifact. This is the most up to date and complete description of the application: <a href="">Project Design </a> (current)_
<br/><br/>


<h3>How were requirements implemented?</h3>
<br/>
<ol>
 <li>User stories were developed to outlined beforehand how the application should work</li>
 <li>Stories were planned into sprints(Sprints managed in Jira)</li>
 <li>Sprint delivery described and outlined in code releases as well as tracability matrix<b>*</b></li>
</ol>


<table>
 <tr>
  <th><b>Stories were broken down by page and actor role</b></th>
  <th><b>2 week sprints were planned for the first few months of development in jira</b></th>
  <th><b>The tracability matrix maps requirements to there design artifacts and corresponding test cases</b></th>
 </tr>
</table>


<h1>Here are a few user story examples!</h1>

**story 1**
>
>As a restaurant manager or staff member<br/>
>I would like to log in once per day to the restaurant management system<br/>
>So that I can access my restaurant's dashboard without repeated authentication, saving time and reducing login friction
>

<br/>

**story 2**
>
>As a restaurant owner<br/>
>I would like a centralized overview screen that provides access to all my restaurant manager dashboards<br/>
>So that I can efficiently manage multiple restaurants from a single account without needing separate logins
>
<br />
<table>
 <tr>
   <th><b>User stories guided me through the product you see currently</b></th>
 </tr>
 <tr>
    <td>
     <img width="1421" alt="Screenshot 2025-03-26 at 1 40 08 PM" src="https://github.com/user-attachments/assets/6f87b390-6f79-490b-94b6-e363d2ad3e3c" />
    </td>
 </tr>
</table>

<h2>There are three releases as of now. Find them in the docs to see summaries of what is done or the number
 of user stories that had been filled at that point. <br/>
</h3>

<ul>
 <li><a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/ReleaseNotes/Pi-Piper%20Code%20Release%201.pdf">Release 1</a></li>
 <li><a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/ReleaseNotes/Pi-Piper%20Code%20Release%202.pdf">Release 2</li>
 <li><a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/ReleaseNotes/Pi-Piper%20Code%20Release%203.pdf">Release 3</li>
</ul>

<hr/>

<h2 align="center">Each Requirement is mapped using the tracability matrix.</h2>
<p align="center"><u>The matrix maps how requirements were designed, implemented and tested. Follow the matrix path to view how all artifacts are tied in.</u></p>

<table width="100%" align="center">
  <tr>
   <th>
     Tracablilty Matrix <br/>
    (from left to right: id, user story, design artifact, UI component, and test case)
   </th>
  </tr>
 <tr>
  <td>
      <img width="806" alt="Screenshot 2025-03-28 at 3 04 01 PM" src="https://github.com/user-attachments/assets/85bf8bc6-9e23-4e03-b2be-6b9fb01c516d" />
  </td>
 </tr>
</table>

<table width="100%">
  <tr>
   <th>
    Test Cases <br/>
    (id, test case, test procedure, test input, expected result, actual result, PASS/FAIL)
   </th>
  </tr>
 <tr>
  <td>
    <img width="1170" align="center" alt="Screenshot 2025-03-28 at 3 05 47 PM" src="https://github.com/user-attachments/assets/d9c355bb-2bf0-4213-9c8b-5cc51b93092d" />
  </td>
 </tr>
</table>

<table width="100%">
  <tr>
   <th>
     Actual Tests<br/>
    (Jest allowed me to easily test by module, both frontend and backend)
   </th>
  </tr>
 <tr>
  <td>
     <img width="100%" alt="Screenshot 2025-03-28 at 1 18 20 PM" src="https://github.com/user-attachments/assets/3ba9a995-0b2b-40f6-8127-9e9ae1238f89" />
  </td>
 </tr>
</table>



<h3>My Express Rest API was documented with Swagger.io editor. Its .yaml file can be found in docs.</h3>
<table>
 <tr>
  <tr>
       <th>Endpoints:</th>
       <th>Schemas:</th>
  </tr>
  <tr>
       <td><img width="684" alt="Screenshot 2025-03-28 at 2 18 14 PM" src="https://github.com/user-attachments/assets/8ccf276e-71a2-4121-9cef-b2b0c6c3ef84" /></td>
       <td><img width="582" alt="Screenshot 2025-03-28 at 2 07 00 PM" src="https://github.com/user-attachments/assets/660c6826-2e18-4d58-bb3d-82d3891d35ad" /></td>
  </tr>
 </tr>
</table>






</hr>

**Hardware and Software Technologies**
1. NEXT - frontend framework for handling dom, fetching data, managing state and authentication.
2. Express JS - Web server framework used for serving and managing storage of application data.
3. Python - Will be used in some fashion if scraping is allowed by providers. Otherwise, I could see myself fully taking data processing out of my express backend an into Python data processing unit for better big data handling.
4. MySQL - Ran locally on my development machine and is always effective and easy to use.
5. Hard Disk Drive - Holds data backups in an external drive.
6. Wintel Computer - For running the application locally at the restaurant.
7. 
<hr />


