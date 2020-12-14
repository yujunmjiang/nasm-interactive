## Reviewing the Trend of Aerospace Industry (Interactive Visualization)

#### Introduction

While many feel the history of aviation begins with Orville and Wilbur Wright, the truth is the history of aviation extends more than 2,200 years, starting with the first manmade kite. These kites, like UAVs (unmanned air vehicles) of today, found use by the military to help create attack plans against their enemies. At the turn of the second century, the military found use in the implementation of hot air balloons. Interestingly, when a lit oil lamp located within the balloon flew overhead, the enemy did not know what to make of it, frightening them.

While there were many attempts at flight between the turn of the second century and the first flight of Flyer 1, the majority of flights were unmanned, employing gases that were lighter than air. A perfect example occurred on December 1, 1884, when Jacques Charles and Nicolas-Louis Robert from Paris, France, flew their hydrogen balloon to an altitude of 1,800 ft, covering a distance of more than 22 miles.

Although many people in the late 1800s were very impressed with this flight, little did they know, it had barely scratched the surface of aviation.

#### Concept

In this project, the task is to create an interactive visualization bese on data that provided by [Smithsonian Institution Open Access API](http://edan.si.edu/openaccess/apidocs/). The content will be focus on a review of aerospcae industry in the past 120 years, and the final output is a combination of quantitative and qualitative data with interaction.

#### Data Request and Cleaning

In this step, I used URL and keyword method to request my dataset from the API. My data includes all aircraft collection by the [National Air and Space Museum](https://airandspace.si.edu) under CC0 access and "object_type": ["aircraft"]. Then, I converted the dataset from JSON to CSV to prepare for the visualization. Meanwhile, I found some duplicated and inaccurate variables appeared in some columns, so I have to clean them out to eliminate unnecessary Information. As the challenge, date was one thing that I spent a lot of time to fill the lost part by Google search and the existing information on Smithsonian Institution wesbite. Since all date base on decate, I kept the new variables in the same format avoid the conflict in data mapping.

<img src="https://github.com/yujunmjiang/major-studio-1-fall-20/blob/master/p3_final/document/Screen%20Shot%202020-12-13%20at%207.13.40%20PM.png">

#### Geocode

Before my visual desgin, I decided to use manufactor's name instead of country becuase it can make to find a precise location for each aircraft. Unfortunately, I recognized the Smithsonian Institution Open Access API did not provide latidude and longitude associated with manufactor's location, so I added all of them manually.

#### Visual Design

This mockup includes three sections which are description, interactive map, and bar chart. User can click each location to see more information about the aircraft includes project name, manufactor, year, and type. The bar chart will show the trend of aircraft develoment in our history base on the number of collections that owned by the National Air and Space Museum.

<img src="https://github.com/yujunmjiang/major-studio-1-fall-20/blob/master/p3_final/document/nasm-final-01.jpg">

Originally, the whole dataset should be devided by two categories: military or non-military uses. The interesting thing is 1/3 data are under a different category called engine. In the history, many manufactor has switched their research and development direction from one to another. Indeed, it can be changed by time easily and that is why we can see a big number of aircrafts in military use before WWI and WWII. Also, some manufactors were automobile company who have invented powerful engines for both car and airplane, so it has to be the third category to find out its trend.

#### Development

<img src="https://github.com/yujunmjiang/major-studio-1-fall-20/blob/master/p3_final/document/screencapture-yujunmjiang-github-io-nasm-interactive-2020-12-13-19_24_40.png">
