<h1 align="center">Pi Piper     |    The Back of House Restaurant Manager</h1>
<br/>

My senior project, Pi-Piper, set out to digitize how one of my local restaurants manages their back of house operations. For context, the restaurant I worked at and its two sibling restaurants are the businesses I was focused on, since I knew what had to be done and how the back of house functions. The back of the house mostly relies on paper for daily prep lists, weekly/monthly cleaning tasks, recipe books and otherwise. So I created an application using NEXT/Express web app intended to digitize all processes in the back of house for all three restaurants.

When I first had this idea, in the summer between my junior and senior year, I spent time in Bellingham. I landed a position as a grill cook at Chipotle. It was here where I was exposed to industry leading prep time series breakdown and analysis, and business insight integrated into every aspect of processes. They had each day mapped down to the minute from open to close. I found inspiration in the flexibility these programs offered their companies. It allowed them to plug in transfer management or employees with ease because of the standardized business practice ingrained into each location. This fueled my decision to create Pi Piper.

<br />

My report on how Pi Piper can help transform business practice: <a href=""><i>The Piper Report</i></a>


View the design artifacts designed for this project: <a href=""><i>Design Guide</i></a>



An overview of my approach:
video

<h2 align="center">Logical Architecture</h2>
<table>
 <th style="color🍊">
  Backend
 </th>
 <th>
  Frontend
 </th>
 <tr>
  <td><img width="917" alt="Image" src="https://github.com/user-attachments/assets/6e7c36ca-cd83-4c2e-b69e-1971cf4722cd" />
</td>
  <td><img width="890" alt="Image" src="https://github.com/user-attachments/assets/2efe93e0-3ba0-4e3d-a0b7-cc1249534454" />
</td>
 </tr>
</table>

<hr/>

**Want to view more from the planning stages of this project?**


Look over my <a href="">Project Proposal</a> (09/22/24), <a href="">Project Requirements </a>(10/10/24), and my <a href="">Project Design </a> (current).

</hr>

**Hardware and Software Technologies**
1. NEXT - frontend framework for handling dom, fetching data, managing state and authentication.
2. Express JS - Web server framework used for serving and managing storage of application data.
3. Python - Will be used in some fashion if scraping is allowed by providers. Otherwise, I could see myself fully taking data processing out of my express backend an into Python data processing unit for better big data handling.
4. MySQL - Ran locally on my development machine and is always effective and easy to use.
5. Hard Disk Drive - Holds data backups in an external drive.
6. Wintel Computer - For running the application locally at the restaurant.

**Key Tech Used in this project:** 


React Hook Form

Powered most forms included in the app. Allowed for effortless login behavior management by providing register, and handleSubmit functions tied into the forms behavior.

Drizzle ORM

Drizzle facilitates the database interaction with a local mysql server. This is a good use case for Drizzle for numerous reasons. Like the quick mutability of database configuration. Because Drizzle works with so many different databases, if I had to tie in another data store (for example to begin adding to a data lake) it could all be done under the same roof and would allow me to manage the data stores seperately but simlarly. 
