<p align="center">
  <a href="https://www.apress.com/gp/book/9781484241189">
    <img alt="Principles of Package Design" src="https://images.springer.com/sgw/books/big/9781484241189.jpg" width="250" />
  </a>
</p>
<h2 align="center">
 Principles of Package Design <br>
</h2>

Principles of Package Design is a book written by [Matthias Noback](https://matthiasnoback.nl/)

The book code examples are written in PHP and the tools that appears in it are from the PHP community.

## Goal of this repository

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

I would like that people that works using Node.js could enjoy of the knowledge that this book offers to its readers. Therefore I going to use Node.js to write the code examples and I going to use tools typically related with it. :heart_eyes:

The style of the code and the chosen tools are 100% my decision. (The good and the bad parts! :kissing_closed_eyes:)

## How study the repository

1. For every chapter of the book has I created a directory
   where appears the final version of the code in the mentioned chapter.

2. Every commit has a reference to the chapter related. Any change I needed to do has a commit, with the objective of follow the flow of the book.

**Note**: If you want to open the links in another tab, just do a CTRL+click on the link.

#### Chapters

1.  _The Single Responsibility Principle_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/f378ccb">Initial commit</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/265c9b6">update README</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/1b28ca6">In order to commit formatted code I installed prettier, pretty-quick and husky</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/822d1e7">adding gitignore file</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/26fa2cc">adding prettier config file</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/395c7e0">creating confirmationMailMailer using a factory function with too many responsibilities</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/8bc0925">extracting the creation of confirmation mail responsibility into his own place</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/51489e7">refactoring confirmationMailMailer to reduce its responsibilities and use instead confirmationMailFactory</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/09f676b">renaming confirmationMailMailer file</a>
     </p>
    </details>

2.  _The Open/Closed principle_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/8de78eb">create a genericEncoder that violates the open/closed principle</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/0ac5c23">worsen the genericEncoder adding a case for yaml format</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/c4ee242">worsen the genericEncoder adding the method prepareData that also violates the open/closed principle</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/96193de">creating 3 different encoders that implements an interface, in this case I'm trusting in duck typing due the lack of interfaces in javascript language unless you use flowjs or an superset like typescript</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/a08b781">creating a encodeFactory whose only responsibility is to create encoders based in the given format</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/a14b46f">refactoring genericEncoder to use the encoder factory</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/b06e05d">making encoderFactory open for extension injecting factories</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/bdb6adf">creating another mandatory method for the encoders: prepareData</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/dc74dde">using prepareData of the specific encoder, however we just introduced temporal coupling...</a><br>
       - <a href="https://github.com/devcorpio/principles-of-package-design/commit/dee4183">removing the temporal cooupling :), who knows, maybe even it is not longer necesary the existence of genericEnconder, instead we could use the encodeFactory whenever we need it :)</a><br>
     </p>
    </details>

3.  _The Liskov substitution principle_

    <details><summary>git commits done during the chapter :shipit:</summary> 
     <p>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/afc3aa2">adding dropbox specific implementation of fileinterface where change Owner has not implementation, this is not be a good example of a good substitute, calling that method will crash the application</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/f818d26">instead of throwing exception, don't do nothing... silent behavior... we are lying to the user of our class...</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/1922cf0">splitting interfaces in order to avoid to need to throw an error or not make something if some user uses changeOwner in a class that not have implementation</a><br>
     </p>
    </details>

4.  _The Interface Segretation Principle_

    <details><summary>git commits done during the chapter :shipit:</summary> 
     <p>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/4ce1081">example of a serviceContainer that implements a interface that violates the interface segregation principle</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/e8d3c8f">separating the virtual interfaces I created, that allows one client use only what need, set, get or both :)</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/0917c3c">kernel code expect a service container that only need the method set</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/c7977bc">a example of controller that  expect a service container that only need the method get</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/c90e001">userRepository it is depending of a concrete class instead of a interface</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/0a29dff">making getUnitOfWork public to use in the new file query.js, automatically all the clients of entityManager depend of this method too, regardless if they use it, can cause backward compatibility problems...</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/3a3cf49">adding role and header interfaces to use in entityManager</a><br>
     </p>
    </details>

5.  _The Dependency Inversion Principle_

    <details><summary>git commits done during the chapter :shipit:</summary> 
     <p>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/fbc4fb5">creating fizzbuzz function</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/9d5789d">making fizzBuzz open for extension, step 1</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/9bea4e9">making fizzBuzz open for extension finished, and right now with the rules is depending on abstractions, an example of the inversion principle</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/7043373">adding authentication function that violates SRP, open close andependency inversion among others</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/a6f1b3b">making authentication depending of a concrete class of userProvider, dependency inversion still is been violated</a><br>
      - <a href="https://github.com/devcorpio/principles-of-package-design/commit/ed00a64">authentication is not depending in connection anymore, now depends in an abstraction</a><br>
     </p>
    </details>

6.  _The Release/Reuse Rquivalence Principle_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, a chapter with good tips :)
     </p>
    </details>

7.  _The Common Reuse Principle_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, a chapter with good tips :)
     </p>
    </details>

8.  _The Common Closure Principle_

    <details><summary>git commits done during the chapter :shipit:</summary>
     <p>
      - No commits here, a chapter with good tips :)
     </p>
    </details>
