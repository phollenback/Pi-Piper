# Python Proposal

Upon furhter research, I found there is a lack of dependability that comes with web scraping using node. If I am able to abstract the web scraping responsibility out to python in one of the following methods it may improve the reliability of my program and assist me in my goal of creating a lightweight, self sustaining system.

<b> Responsibility: </b> gather the updated excel information each interaval of my choosing. (Likely either daily or hourly) <br>       then, once all necessary data is gathered and placed in proper data structures, this 'data-processer' will behave in the following ways:

<table>
  <tr>
    <td>Update The Market:</td>
    <td width="60%"><img width="100%" alt="Screenshot 2024-08-24 at 1 01 29 PM" src="https://github.com/user-attachments/assets/fd565a7f-b888-49e0-b070-9c7f08cb3d2d" /></td>
  </tr>
  <tr>
    <td>Plan Prep:</td>
    <td>Will be established ones the requirements are set.</td>
  </tr>
  <tr>
    <td>Define Suggestions:</td>
    <td>Will be established ones the requirements are set.</td>
  </tr>
</table>

<br/>


### When considering the project setup, the kind of python project must be decided upon:

| **Aspect**                | **Python Script**                                                                                                       | **Python Project (FastAPI, etc.)**                                                                                                     |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Quickness to Implement**| Quicker to implement with minimal setup. Ideal for rapid prototyping and small-scale tasks.                              | More initial setup required. Slower to implement due to the configure a full project structure.                      |
| **Complexity**            | Lower complexity. Suitable for straightforward tasks that do not require extensive functionality or modularity.          | Higher complexity due to the need for a full project structure, API handling, and potential database or third-party integrations.       |
| **Use Case**              | Ideal for simple, single-purpose processing tasks where rapid deployment and minimal setup are priorities.               | Best for complex, scalable tasks, where long-term flexibility, reusability, and independent service management are required.            |


## Regardless of the method of implementation, here is the projected necessary dependencies:
<ol>
  <li>
    <b>Selenium</b> - Used to launch web driver instances.
  </li>
  <li>
    <b>Scrapy</b> - Used to scrap data from said webdriver instance. OR <br><b>Beautful Soup</b> - Simpler, more straightforward version of Scrapy, best for small scraping tasks.
  </li>
  <li>
    <b>lxml</b> - HTML and XML parser.
  </li>
</ol>

## Scrapy vs. Beautiful Soup
>
> <b><i>Scrapy</i></b> is meant for complex web scraping tasks that are computationally intensive. The performance boost is likely relevent; in order to keep this application, lightweight, trustworthy, and easily manageable, <b><i>Beautiful Soup</i></b> would be the more reliable option. Since, for now, all web threads will come from the bi-weekly manager on duty there is no need for any extra technology to manage a large traffic size of threads scraping.

