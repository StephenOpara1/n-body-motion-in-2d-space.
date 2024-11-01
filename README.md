In this project I simulate the motion of bodies under the influence of gravity. Below are the descriptions of various folders under this project.

I recommend studying this project from simulation - visual - calculator - graph(incomplete) - field coloring (incomplete). Though the first three folders still need improvements in their coding such as input and error handling, including simulation optimization. Special cases too, two masses being at the same position yields an infinite force, therefore they should be treated as one by the programming if such cases occur.

1. Simulation - This folder houses the html, css, and JavaScript files of the interface in which the user inputs the system's data (initial conditions). That is the first page the user visits. From here the user can click on links below to redirect them a page where the simulation is run. The simulation could be in form of a calculator (calculator folder), visual (animation folder), field coloring (field coloring folder), graph of the systems motion (graph folder)

2. Visual - Here a simple animation of the system's motion is made by leveraging canvas 2d. 

3. Calculator - This allows the user to input a time interval after the initial condition of the system to display data of the system's condition after that time.

4. Graph - Here the graph of the system against time, it may be acceleration, speed, or position, is plotted within a certain interval. This project isn't complete yet.

5. Field Coloring - This is exactly the same as visual except that the gravitational field in space is given a color based on it's strength. Therefore as the body's move the color of each pixel on the screen changes. Canvas 2d is not fast enough at iterating over every pixel on the screen, looking for how to fix this I encountered webgl. Currently, I have been using this folder to practice the basics of webgl.


Please Note: Saying complete doesn't mean it's all done, it just means it's usable at the moment.

I haven't really had enough focus on this project due to college application, school work, and others.
