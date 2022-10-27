import React from "react";

const Blog = () => {
  return (
    <div className="bg-secondary">
      <div className="text-white p-5">
        <h1>what is cors?</h1>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          Firebase, Backend-as-a-Service (BaaS), is a platform by Google that
          provides functionalities and helps with the backend development of
          your Android, iOS, or web and even some products that support Unity3D
          too.
          <p>Top Functionalitiies Are :</p>
          <ul>
            <li>
              Firebase Database: used to store users data like chat messages,
              users details and other metadata
            </li>
            <li>
              Firebase Cloud Storage: used to store user-generated content like
              the profile picture, multimedia messages, etc.
            </li>
            <li>Firebase Cloud Messaging: used to send notification</li>
            <li>
              Firebase Remote Config: used to perform A/B testing on the go
            </li>
          </ul>
          <p>The other options do you have to implement authentication</p>
          <ul>
            <li>Twitter</li>
            <li>Yahoo</li>
            <li>Phone Number</li>
            <li>Facebook</li>
          </ul>
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1>How does the private route work?</h1>
        <p>
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login. The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login.
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1>What is Node? How does Node work?</h1>
        <p>
          <h4>Node.js</h4>
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine (i.e. V8
            engine) and executes JavaScript code outside a web browser, which
            was designed to build scalable network applications. Node.js lets
            developers use JavaScript to write command line tools and for
            server-side scripting—running scripts server-side to produce dynamic
            web page content before the page is sent to the user's web browser.
            Consequently, Node.js represents a "JavaScript everywhere"
            paradigm,[6] unifying web-application development around a single
            programming language, rather than different languages for
            server-side and client-side scripts.
          </p>
          <h4> Working of Node.js:</h4>
          <p>
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blog;
