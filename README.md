# React And DotNet
This is the where the final code and the starter code for the React and DotNet Crash Course at TIY. The master is the starting template. The final code is on the branch `final`


### Things to install first

In order to follow along you should have the following items set up

- git
- .NET Core
- Webpack
- Your favorite IDE (I like VS Code)


### Set up instructions
Run the following commands to get the project set and ready to go


- Clone the repository 
    ``` bash
        git clone https://github.com/mdewey/ReactAndDotNet.git
    ```
- Restore the .NET Pacakges
    ``` bash
    dotnet restore
    ```
- Restore the client side packages
    ``` bash 
    yarn
    ```


### To run
Since these are actaully 2 seperate apps, you will need 2 terminal windows (or tabs). 

- In the first terminal run 

    ``` bash
        dotnet watch
    ```

- And in the other terminal run

    ```bash
        webpack --watch
    ```



