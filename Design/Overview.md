# Pi Piper Design Overview

### The Problem
>
> Since its conception Republic Pi has used a paper prep list and a company ipad to make its orders between the two top services in the area, Sysco and US Foods. In the past,
> the manager making the orders has had to juggle multiple devices in order to compare prices to make the most effective order per the restauraunts needs.

### My Solution
>
> Create an ipad app that digitizes and automates the Prep List and Order Management system. This project will display all comparisons and be able to formulate the orders for the
> manager while comparing. Offering suggestions and presets along the way in order to save the user time. Alongside this service will be a digitized prep list and planning
> visualization for pre-open and pre-rush.


# High Level Overview
<img width="100%" alt="Layer Breakdown" src="https://github.com/user-attachments/assets/c6cb3439-39c6-47fe-9e61-9a21efb64832">


<!-- Frontend component hierarchy  -->
<div align="center">
    <h1>Frontend</h1>
</div>

<!-- Arrow to next layer -->
<div align="center">
    <h3>Triggered by User Input</h3>
    <h1>⇩</h1>
</div>

<!-- Controllers -->
<div align="center">
    <img width="935" alt="Screenshot 2024-08-16 at 6 52 10 PM" src="https://github.com/user-attachments/assets/acb6ea81-a1d6-431d-8b2c-96831a1c8d2d">
</div>

<!-- Arrow down to next layer -->
<div align="center">
    <h3>----------------------------</h3>
    <h3>Triggered by Controller</h3>
    <h1>⇩</h1>
</div>

<!-- Business Layer Logic -->
<img width="100%" alt="Screenshot 2024-08-16 at 7 46 24 PM" src="https://github.com/user-attachments/assets/346811d5-dc62-4786-8dac-85bb00f752db">


<!-- Arrow to next layer -->
<div align="center">
    <h3>----------------------------</h3>
    <h3>Access Necessary data</h3>
    <h1>⇩</h1>
</div>

<!-- Data Access Layer -->
<img width="100%" alt="Screenshot 2024-08-16 at 7 43 17 PM" src="https://github.com/user-attachments/assets/27d12692-ec46-4202-9088-720310b3b4b7">




<!-- Arrow to next layer -->
<div align="center">
    <h3>----------------------------</h3>
    <h3>Mapping and Crud</h3>
    <h1>⇩</h1>
</div>


# Database Decisions:
<img width="100%" alt="Screenshot 2024-08-16 at 5 42 19 PM" src="https://github.com/user-attachments/assets/7f680450-4f2b-4e5a-bea1-e4fcfe394160">


# Wireframes:

### Because I already know the restauraunt has an ipad, it makes my design easier because I know the viewport I need to design it to -

<table>
    <td>
      <img width="100%" alt="Prep List Screen" src="https://github.com/user-attachments/assets/e0d19716-23d2-4fca-be2e-ac4ba040801b">
    </td>
    <td>
     <b><i>Significant Features: </i></b>
      <ol>
       <li><b>Button Slider for each cluster of PrepListItem's</b></li>
           >   Toggle to find the item to complete or to mark completed <br /><br />
           >   With authorization, can add 'recipe' tab to include all recipies for the restauraunt <br /><br />
        <li><b>Editable Note system to indicate possible extra work/special notes</b> </li>
           >   Keep notes on a daily basis for better communication between shifts <br /><br />
           >   Should always contain some text(possibly instructions/ingredients)<br/> <br/>
        <li><b>Triggers the 'Partial Popup'(See 'Popup's and Single Screen's')</b></li>
           >   Allows user to leave note for the next cook to use to finish the PrepListItem<br /><br />
           >   This action could be expanded upon, especially if user login is enforced <br /> <br />
      </ol>
    </td>
  </tr>
  <tr>
    <td>
      <img width="100%" alt="Order Screen" src="https://github.com/user-attachments/assets/ae7e9141-5923-40c9-853c-8c720acff6d2">
    </td>
    <td>
      <b><i>Significant Features: </i></b>
      <ol>
        <li><b>Ease of adding the items that are always apart of the order</b></li>
           >   Immediete price comparison <br /><br />
           >   Suggestions as results of python data processing <br /><br />
        <li><b>Custom created presets that add common clusters of items</b> </li>
           >   Always editable by a manager depending on specials, seasons, or time of the week <br /><br />
           >   Depends on dynamic cluster creator in staff used excel datasource<br/> <br/>
        <li><b>Intuitive category filtering and cart manipulation</b></li>
           >   Filter by Python suggestions or category<br /><br />
           >   Draggable grid items with input fields for both carts <br /> <br />
           >   Adjustable quantity and price total identifier upon add to cart <br/> <br/>
      </ol>
    </td>
  </tr>
  <tr>
      <td>
              <img width="100%" alt="Screenshot 2024-08-13 at 9 26 00 AM" src="https://github.com/user-attachments/assets/daad3c8e-d06d-4380-bd9a-8eed5f66e330" />
      </td>
    <td>
      <b><i>Significant Features: </i></b>
      <ol>
        <li><b>Pick to either view the Sysco or the USFoods cart</b></li>
           >   Final check of price <br /><br />
           >   Ability to edit/delete item quantity <br /><br />
        <li><b>Scrollable Cart List and a order button</b> </li>
           >   The order button will only be allowed in the admin side of the app <br /><br />
           >   Final stage before email verification to confirm <br/> <br/>
      </ol>
    </td>
  </tr>
</table>


# This work in deeper detail:
<ol>
  <li>Wireframes</li>
  <li>Python Proposal</li>
  <li>Module Breakdowns</li>
</ol>

