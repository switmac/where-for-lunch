## Before you start
The main purpose of this repo is to setup a code base for you guys to add additional features / fix bugs.
Currently it is definitely not UI/design perfect. Our goal is to test your react/redux/node/test skills.
CSS skills is essential, but you don't have to make the app pixel perfect because it will cost lots of time.

#### What we value the most is:
- The ability (at least trying hard) to write clean code which is easy to read and test
- Write scalable code, in simple ways, it means adding additional features will require less restructure and effort.
- Do not leave tech debt unless you need to quickly patch a serious production bug (definitely not for our case)
- Refactor at an early stage whenever neccessary
- The ability to struture your code in a logical way
- You know about your code performance
- Think thoroughly for any potential new libraries. A bad example will be to import a huge package and only because you need to use one simple method.
- It is important to have proper error handling for each tasks to some extent
- Tests. We know TDD is hard to follow, but make sure you have your tests written for any files **with logics** in it.

#### About the tasks:
How many tasks you've accomplished is NOT what we care about the most. Please do not rush.

If you are stuck, set up a timeframe to allow yourself to resolve it first, if you can't work it out, please ask me.
This is very normal, so you don't have feel pressured to solve everything yourself.

If you have any questions or better proposals to the existing setup, you are more than welcome talk to me or make a pr for it.

There is no right or wrong about the approach you decided to take for certain tasks.
As long as they make sense, i.e. you know exactly why you wrote this line, this method, why in this file, why you needed to use this library etc.
But keep in mind that your code should try to be clean, dry, scalable, readable, and importantly testable.

At the end of each task, we'll do some evaluation, so please make sure you are confident that you've already tried your best to implement the current task with proper testing.


## Initial stage:
When you first time access this app, it should prompt you a location permission, click on yes, then wait for a few seconds (for navigator to grab your lat long), you can click on the green button to randomly generate you a food place based on a certain radius around you.
![on load](https://docs.google.com/uc?id=12ttwOeZRDUwD7vk7FiMk_OQE0U0X00gb)

![on button blick](https://docs.google.com/uc?id=1XgFa_Yu07Ca-V7Erv_BMajkRqHq09EHu)

--------------------

## Let's start playing! Don't forget to add tests!

### Task 1
Currently after you load the page then immediately click on the green button, server will throw out errors because it doesn't know your lat long yet.

We want to disable the green button and change it to grey before we finish fetching the user's lat long. Once lat long's **values** were set, we'll continue.


### Task 2
You can choose to do either the price one or cuisine one as stated below, note that cuisine and price should both belong to **condition**, i.e. they should stay within condition reducer and component. 

#### Cuisine
Currently we don't support search by cuisines.

Please create a multiple checkboxes for a list of cuisines from [here](https://www.yelp.com.au/developers/documentation/v3/all_category_list). Note that you don't have to include everything, just a few cuisines as examples will do. Allow search by these cuisines from Yelp.

#### Price:
Currently we can modify the radius to return different results. We want to do the same thing for price range.

Create a multiple checkboxes to set the price selection. Read and write to yelp api with the price selection passed down as a searching param.

Think about the difference between a component and container, restructure or refactoring may be needed for this task.

### Task 3
Currently we don't support place details check.

Please create a place details page which can be accessed by clicking on the generated place on homepage and reusing the existing component. 

Data can be fetched from [here](https://www.yelp.com.au/developers/documentation/v3/business)

On the place details page, it should include the basic information of this place as the homepage as well as some photos. You may put some basic design down as you like.

### Task 4
Integrate with Google Map.

On place details page, grab the address then show it on google map. 

## How to submit code
Fork off this repo, commit your code changes to your own git account. For each task, they should stay in a separate branch with the task number. Please open a pull request against with your master first and ping me after you think you have thoroughly finished one task. During the time I provide my feedbacks, you could start your next task by branching off your previous task. Once the review is done and you would like to implement some of the feedbacks, you could work on your previous task again then merge the latest code into your current task. When you are done with your current task, open another PR against with your previous task. At the end of your coding period, you should merge everything ready to master. Flows explained below with an example:

fork off this repo -> branch off your repo's master to task1 -> work on task1 -> open a pr with task 1 and your local repo master -> waiting for feedbacks meanwhile branch off task1 to task2 -> work on task2 -> implement task1's feedbacks if available -> merge the latest task1 to task2 -> continue working on task2 -> open a pr with task 2 and task 1 ..... -> in the end, merge the latest task branch to your local master -> done


