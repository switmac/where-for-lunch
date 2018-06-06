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
- Think throughly for any potential new libraries. A bad example will be to import a huge package and only because you need to use one simple method.
- Tests. We know TDD is hard to follow, but make sure you have your tests written for any files **with logics** in it.

#### About the tasks:
How many tasks you've accomplished is NOT what we care about the most. Please do not rush.

If you are stuck, set up a timeframe to allow yourself to resolve it first, if you can't work it out, please ask me.
This is very normal, so you don't have feel pressured to solve everything yourself.

If you have any questions or better proposals to the existing setup, you are more than welcome talk to me or make a pr for it.

There is no right or wrong about the approach you decided to take for certain tasks.
As long as they make sense, i.e. you know exactly why you wrote this line, this method, why in this file, why you needed to use this library etc.
But keep in mind that your code should try to be clean, dry, scalable, readable, and importantly testable.


## Initial stage:
When you first time access this app, it should prompt you a location permission, click on yes, then wait for a few seconds (for navigator to grab your lat long), you can click on the green button to randomly generate you a food place based on a certain radius around you.
![on load](https://docs.google.com/uc?id=12ttwOeZRDUwD7vk7FiMk_OQE0U0X00gb)

![on button blick](https://docs.google.com/uc?id=1XgFa_Yu07Ca-V7Erv_BMajkRqHq09EHu)

--------------------

## Let's start playing! Don't forget to add tests!

### Task 1
Currently after you load the page then immediately click on the green button, server will throw out errors because it doesn't know your lat long yet.

We want to disable the green button and change it to grey before we finish fetching the user's lat long. Once lat long were set, we'll continue.


### Task 2
You can choose to do either the price one or cuisine one as stated below:

#### Price:
Currently we can modify the radius to return different results. We want to do the same thing for price range.

Create a multiple checkboxes to set the price selection. Read and write to yelp api with the price selection passed down as a searching param.

#### Cuisine
Currently we don't support search by cuisines.

Please create a multiple checkboxes for a list of cuisines from [here](https://www.yelp.com.au/developers/documentation/v3/all_category_list). Note that you don't have to include everything, just a few cuisines as examples will do. Allow search by these cuisines from Yelp.

Note that again, there is no right or wrong approach, if you feel like restructure anything for this task, please do so.

### Task 3
Currently we don't support place details check.

Please create a place details page which can be accessed by clicking on the generated place on homepage.

Data can be fetched from [here](https://www.yelp.com.au/developers/documentation/v3/business)

On the place details page, display photos. You may put some basic design down as you like.

### Task 4
Integrate with Google Map.

On place details page, grab the address then show it on google map. 

## How to submit code
Fork off this repo, commit your code changes to your own git account. For each task, they should stay in a separate branch with the task number. Commit to your forked master after you think one task is thoroughly finished. Then branch off the latest forked master to the next task.
