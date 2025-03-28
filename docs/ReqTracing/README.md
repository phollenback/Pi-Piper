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
