<h1 align="center">Design Guide</h1>
<h4>The Project Proposal Outlines the following and can be found <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/451-Project-Proposal.pdf">here.</a></h4>
<ol>
  <li>Project Scope</li>
  <li>High-Level Solution</li>
  <li>Project Cost and Schedule</li>
</ol>

<h4>The Project Requirements outlines the following and can be found <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/451-Project-Requirements.pdf">here.</a></h4>
<ol>
  <li>Functional Requirements</li>
  <li>A Non Functional Requirement</li>
  <li>Logical System Design</li>
  <li>User Interface Design</li>
  <li>Reports Design</li>
</ol>


<h4>The Project Design outlines the following and can be found <a href="https://github.com/phollenback/Pi-Piper/blob/main/docs/452-Project-Design.pdf">here.</a></h4>
<ol>
  <li>Design Overview</li>
  <li>Detailed High Level Solution(final)</li>
  <li>Detailed Technical Design</li>
  <li>Issue and Risk Log</li>
</ol>

<h4>I documented my API with Swagger. Find that .yaml file here</h4>


<hr/>

**If you don't want to look through the ENTIRE design process, here are a few key writeups about a Non-Functional Requirement I want to implement and how the PWA is an important technology to include for this project.**



_Non Functional Requirement (NFR)_

My NFR is Data backup. Because there is major emphasis upon the data driven components of my application, such as BI reports as detailed below, or daily suggestions defined by inventory management and ingredient pricing, ensuring that there are no holes in time-series data will ensure that my data is up to date and provides useful, accurate insights.
The backup redundancy I am aiming for is 24 hours. At worst there can be one day's worth of data loss. My decision of 24 hours is due to the fact that many decisions being made that go into data can be recalled in the case of a loss of a day of data. One day is about the biggest amount that would be possible to manually fill in, any more may induce some issues by user entry error.
The Recovery Point Objective (RPO) that I would like to aim for is sometime in the early morning, somewhere between 2am and 5am so that there is zero conflict with the restaurant operations. Sometimes there can be planning of prep or managerial duties that run into the early morning if there was a late close the day before but I figure there will never be employees or managers in at these hours no matter the case. The key point that I want to hit with backing up data between these times is that the overhead of the application does not interfere with backing up, and flags thrown by a bad data backup can be signaled to management so it can be fixed first thing in the morning.
I plan to achieve this by purchasing a hard disk connected to my in house hosting machine. There are numerous advantages that can be linked to utilizing a hard disk. First is the accessibility, because hard disks generally utilize a wired connection, there is little overhead for backing up data since they can be accessed so quickly. It is also relatively safe disaster wise especially in my case where it is right next to the hosting machine, in case of disaster there is less chance that the data gets corrupted in the hard disk rather than the computer which is more susceptible to water, or any other potentially harmful material.
Integrity of each backup should be checked upon backup completion, flagging any errors if data is incomplete or does not represent a full day's worth of data. Corrupted backups would be one of the most detrimental issues to plague my backup system, becoming unaware of poor backups would create problems if it had to be used to recover data and produce poor business insights.
Access control is an important aspect of this data backup system. Data backups and recoveries must only be initiated by authorized personnel. Failure to adhere by this principle could cause issues especially when trying to initiate a data recovery when not necessary, improperly overwriting data and likely creating errors. This will also ensure that when the data is backed up, it is out of the restaurant's hours of prep/service so that the performance overhead is focused on in-hours tools that may be used rather than backup services.

_Progressive Web App (PWA)_

All the effort and technology invested in ensuring the application’s state integrity will be futile if a network connection issue results in corrupted data retrieval or failed postings to the web server. Because of this concern, React’s integration with PWA gave me all the information I needed when deciding on the framework to work with. PWA, or ‘Progressive Web App’ offers caching and loading of the critical data points even with limited network connectivity (^3), eliminating some of the risks involved in integrating an application paramount to the restaurant's operations.

^3. 
The worker that is implemented into the index file of the application will handle all caching of developer defined data points (like prep lists or ingredients) upon the user first loading up the app on a device. Each time the worker loads up or re-renders the application with a working network connection it will save that state to be served if the connection is faulty upon the next use of the application. PWA provides a quick patch to a major issue in this regard and will improve the application uptime and eliminate as many error screens as possible, which will improve the performance of this application tremendously. But this is not all that PWA offers. It is also essential in allowing different types of client access to the application. Whether it be an employee updating the prep list from their phone, a manager creating a prep plan for the next day, or an owner managing the prep items from their desktop, the experience will all be the same. The application will be able to be saved to the user's home screen on mobile devices for quick access to the application and will be loaded as if it is a native application, no matter what the operating system. PWA allows the application to be loaded without any internet search bars or otherwise functionality that would be loaded in a typical web browser application. The ability for the application to feel native to nearly any operating system without having to deal with the configuration of catering code to each OS is invaluable when trying to deliver a positive user experience in a timely fashion. 

<hr/>

**To Read More, View 'Project Design' for the most up to date and all encompassing outline to my approach.**
