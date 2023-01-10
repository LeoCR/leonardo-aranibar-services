import React from "react";
import ServicesIcons from "./ServicesIcons";
import { Route } from "react-router-dom";
import ServiceDescription from "./ServiceDescription";
import { TransitionGroup } from "react-transition-group";

var Router;
if (typeof document !== "undefined") {
  Router = require("react-router-dom").BrowserRouter;
} else {
  Router = require("react-router-dom").StaticRouter;
}
export const Services = () => {
  return (
    <React.Fragment>
      <article
        id="article_services"
        className="article_bg_img"
        style={{
          width: "100%",
          position: "relative",
          float: "left",
          display: "inline-block",
          minHeight: "800px",
        }}
      >
        <div id="services">
          <TransitionGroup
            enter={true}
            exit={true}
            appear={true}
            id="transition-group-container"
            style={{ width: "100%" }}
          >
            <Router>
              <Route
                exact
                path="/services/cloud-development"
                render={() => (
                  <React.Fragment>
                    <ServiceDescription>
                      <article className="content_service_article_container">
                        <div className="first-child-p">
                          <p>
                            Also known as cloud-based development or in-cloud
                            development.Consist in build, test,run and deploy
                            your software in a cloud provider such as Amazon
                            Cloud 9,Google Cloud Platform, Heroku, Microsoft
                            Azure... Actually these providers have a lot of
                            services,features and tools that you can use to
                            publish your apps for the public.These cloud
                            providers are helping businesses giving them a lot
                            of serivces,resources and tools to make an analisis
                            of the services that you are using in your system in
                            real time such as Amazon Cloud Watch for example.
                          </p>
                          <p>
                            One of the benefits of Cloud Development is that you
                            don't need to have physical hardware or servers
                            instead we can have these servers and hardware in
                            the cloud reducing the cost of have a data-center
                            for example.You only have to pay for the resources
                            that you are consuming.
                          </p>
                          <p>
                            One of the difference between Cloud Development and
                            Traditional Development is that in cloud development
                            the software is developed, tested and run within a
                            cloud environment meanwhile in the Traditional you
                            have to test and run the software locally then test
                            it in diferent environments such as develop
                            environment.
                          </p>
                        </div>

                        <div className="bg_white">
                          <p>
                            Another feature of the cloud development is the
                            self-service basically it doesn't require human
                            intervention to get more resourses becuase you might
                            have already a configuration to scale your app in
                            case that you need more resources.
                          </p>
                          <p>
                            The elasticity is one of the powerful features in
                            the Cloud Development because for example you can
                            reduce the resources during the night when all your
                            customers are sleeping allowing you save a lot of
                            money.
                          </p>
                          <h3>References</h3>
                          <ul>
                            <li>
                              <a
                                href="https://platzi.com/cursos/aws-cloud-practico/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://platzi.com/cursos/aws-cloud-practico/
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://platzi.com/cursos/fundamentos-google/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://platzi.com/cursos/fundamentos-google/
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </ServiceDescription>
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <React.Fragment>
                    <ServicesIcons />
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/leonardoaranibar/"
                render={() => (
                  <React.Fragment>
                    <ServicesIcons />
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/services/electronic-bill"
                render={() => (
                  <React.Fragment>
                    <ServiceDescription />
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/services/web-development"
                render={() => (
                  <React.Fragment>
                    <ServiceDescription>
                      <article className="content_service_article_container">
                        <div className="first-child-p">
                          <p>
                            Any web application or any web site depends of the
                            HTML,CSS and Javascript to have a good User
                            Interfaces and User Experiences,is good to know that
                            a good User Experience(UX) occurs when a web
                            application lack of Instructions I mean the user
                            shouldn't need to read a Guide to know how to use a
                            Web Application. I am not saying that you shouldn't
                            create documentations of your Web Applications in
                            fact the documentation garanty the quality of your
                            Web Application, my point is that if you like to
                            have a good user experience your web applications
                            should be 100% intuitive such as Facebook, Gmail ,
                            Twitter or Google Calendar for example,these web
                            applications lack of instructions and these apps are
                            easy to use.
                          </p>
                          <p>
                            Exists a lot of ways to create web applications with
                            a good UX,basically I think that the UX has a bunch
                            of core values that we should have in mind at the
                            hour of design the Prototypes or Wireframes such as:
                            Usability, Utility, Desirable, Valuable,
                            Accessibility , Reliability and Findability.
                          </p>
                          <h3>Usability:</h3>
                          <p>
                            Usability can be described as the capacity of a
                            system to provide a condition for its users to
                            perform the tasks safely, effectively, and
                            efficiently while enjoying the experience.
                          </p>
                          <h3>Utility:</h3>
                          <p>
                            We can known if we are fulfilling the utility of our
                            apps answering these questions:
                          </p>
                        </div>

                        <div className="bg_white">
                          <h4>Is this feature useful to our final users?</h4>
                          <p>
                            Every time that we are defining our user
                            interfaces,we should be able to answer this question
                            in order to prevent work in features that our final
                            users doesn't care about.
                          </p>
                          <h4>
                            Does the feature meet the needs of the final users?
                          </h4>
                          <p>
                            When we are designing User Interfaces we should care
                            about the needs of the final users in order to have
                            a good User Experience.
                          </p>
                          <h3>Desirable:</h3>
                          <p>
                            Desirability gives users what they really want as
                            well as need.
                          </p>
                          <h3>Valuable:</h3>
                          <p>
                            Based on the{" "}
                            <a
                              href="https://hbr.org/2016/09/the-elements-of-value"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Hardvard Business Review
                            </a>{" "}
                            they say: "The amount and nature of value in a
                            particular product or service always lie in the eye
                            of the beholder, of course. Yet universal building
                            blocks of value do exist, creating opportunities for
                            companies to improve their performance in current
                            markets or break into new ones. A rigorous model of
                            consumer value allows a company to come up with new
                            combinations of value that its products and services
                            could deliver. The right combinations, our analysis
                            shows, pay off in stronger customer loyalty, greater
                            consumer willingness to try a particular brand, and
                            sustained revenue growth".
                          </p>
                          <h3>Accessibility:</h3>
                          <p>
                            Is a measurement of a user’s ability to use
                            products/services, the extent to and ease with which
                            they can meet their goals. Designing with
                            accessibility in mind enables people with a range of
                            abilities and disabilities to perceive, understand,
                            navigate, interact with, and contribute to the web.
                          </p>
                          <h3>Reliability:</h3>
                          <p>
                            Is that the research results must be repeatable or
                            reproducible. Other researchers must be able to
                            conduct the same research under the same conditions
                            and generate the same data.
                          </p>
                          <h3>Findability:</h3>
                          <p>
                            Is a measurement of how easy it is to locate content
                            on your user interface.It means users will be able
                            to find content easily on your app.
                          </p>
                          <p>
                            Before to start to design and create the wireframes
                            and prototipes of your web application is important
                            to know that we should have a balance between the
                            Business Needs and the Final User needs,so in order
                            to evaluate and measure the scopes of these features
                            that we need ,there is a bunch of methods that we
                            can use to evaluate the needs of your final users
                            before to start to design the wireframes of your
                            User Interfaces(UI's) such as: Stakeholder
                            Interviews, Questionnaires, card
                            sorting,Storyboards,Diagram of Use Cases,User
                            Testing,Surveys...
                          </p>
                          <h3>Stakeholder Interviews:</h3>
                          <p>
                            Stakeholder interviews are one-on-one conversations
                            with people who have a vested interest in the
                            success of the product you are working on.
                          </p>
                          <p>
                            A stakeholder is anyone within an organization who
                            can offer useful advice about the product and
                            ultimately help simplify the design process.
                            Additionally, stakeholders rely on the product’s
                            success for their own gain, either personally or
                            professionally. Although these are normally
                            high-level employees, stakeholders can be
                            lower-level employees or even prominent users.
                          </p>
                          <h3>Questionaries:</h3>
                          <p>
                            There are nine steps involved in the development of
                            a questionnaire:
                          </p>
                          <ul>
                            <li>Decide the information required.</li>
                            <li>Define the target respondents.</li>
                            <li>
                              Choose the method(s) of reaching your target
                              respondents.
                            </li>
                            <li>Decide on question content.</li>
                            <li>Develop the question wording.</li>
                            <li>
                              Put questions into a meaningful order and format.
                            </li>
                            <li>Check the length of the questionnaire.</li>
                            <li>Pre-test the questionnaire.</li>
                            <li>Develop the final survey form.</li>
                          </ul>
                          <h3>Card Sorting:</h3>
                          <p>
                            Is a method used to help design or evaluate
                            information architecture. In a typical card sorting
                            session, participants organize topics into
                            categories that make sense to them and group them
                            accordingly. To conduct a card sort, you can use
                            actual cards, pieces of paper, or one of several
                            online card-sorting software tools.
                          </p>
                          <h3>Storyboards:</h3>
                          <p>
                            The purpose of UX storyboards is to consider and
                            communicate a sequence of states, rather than
                            provide specific visual direction. They demonstrate
                            how someone might interact with a future product or
                            service.
                          </p>
                          <h3>Diagram of Use Cases:</h3>
                          <p>
                            The use cases are the description that explains how
                            the user should be able to use the product for the
                            completion of the task. A Use case depends on Users
                            action and the system responses to the users action.
                          </p>
                          <p>
                            Once that we have already covered these features
                            with one of the methods presented above , we can
                            continue with the next steps that consist in design
                            your wireframes and then the Prototipes of the
                            UI's.At this point is important to have already
                            identified your use cases,(to do that you can use a
                            Diagram of Use Cases UML),once that all the parts
                            approved this diagram(Stakeholders, Team Leads,
                            Product Owner,UX Leads,...) now we can start to
                            design the wireframes and then the prototipes.
                          </p>
                          <h3>What is a Wireframe?</h3>
                          <p>
                            Wireframes provide a clear overview of the page
                            structure, layout, information architecture, user
                            flow, functionality, and intended behaviors. Is a
                            practice most commonly used by UX designers. This
                            process allows all stakeholders to agree on where
                            the information will be placed before the developers
                            build the interface out with code.
                          </p>
                          <h3>What is a Prototype?</h3>
                          <p>
                            A simulation or sample version of a final product,
                            which UX teams use for testing before launch.The
                            goal of a prototype is to test and validate ideas
                            before sharing them with stakeholders and eventually
                            passing the final designs to engineering teams for
                            the development process.
                          </p>
                          <h3>
                            What is the difference between Wireframes and
                            Prototypes?
                          </h3>
                          <ul>
                            <li>
                              A wireframe is low-fidelity that takes less time
                              to create, while a prototype is high-fidelity that
                              is more time consuming.
                            </li>
                            <li>
                              Wireframes are tools to get approval from
                              stakeholders. A prototype will allow you to test
                              the user experience and get user feedback from
                              user interaction.
                            </li>
                            <li>
                              A wireframe is more to convey the 30,000 foot view
                              of the idea of the product. A prototype is
                              something that will be similar to how the final
                              product acts and behaves.
                            </li>
                            <li>
                              A wireframe will make use of placeholders and
                              focus on the overall structure. A prototype will
                              make use of the actual design.
                            </li>
                          </ul>
                          <p>
                            In my oponion a prototipe is a design of High
                            Reliability about the design of every User Interface
                            that you will have inside your web
                            application,during this process we can work
                            toguether with Graphic Designers in order to provide
                            a beatiful UI.
                          </p>
                          <h3>Finally design the Backend</h3>
                          <p>
                            Once that we have the prototipes already created is
                            time to design the Architecture of your Web
                            Application,basically we need to define in a
                            document the components of the BackEnd that we will
                            need such as what kind of database we need for
                            example MongoDB, MySQL or GraphQL,what languages we
                            will need to process data such as Python,Java or
                            NodeJS,where we will put our microservices for
                            example Google Cloud Platform or Amazon Web Services
                            , the costs of these components,diagrams of sequence
                            , diagrams Entity Relationship,Model of Data,the
                            limitations of our app,the scope of this web
                            application, cases of use (Describe the purpose of
                            each prototipe to get it),finally a custom diagram
                            about how should be the flow of our backend with all
                            the infrastructure.
                          </p>
                          <p>
                            Finally once that all team members have already
                            identified all these features and scope of the Web
                            Application is time to define the User Stories that
                            we need to address and split the development of
                            these user stories in sprints , then we can start to
                            program.
                          </p>
                          <h3>References</h3>
                          <ul>
                            <li>
                              <a
                                href="https://www.interaction-design.org/literature/article/key-question-in-user-experience-design-usability-vs-desirability"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://www.interaction-design.org/literature/article/key-question-in-user-experience-design-usability-vs-desirability
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://hbr.org/2016/09/the-elements-of-value"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://hbr.org/2016/09/the-elements-of-value
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxmag.com/articles/accessibility-in-ux-the-case-for-radical-empathy"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxmag.com/articles/accessibility-in-ux-the-case-for-radical-empathy
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxpamagazine.org/reliability-and-validity-ensuring-a-foolproof-ux-research-plan/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxpamagazine.org/reliability-and-validity-ensuring-a-foolproof-ux-research-plan/
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://baymard.com/learn/findability-vs-discoverability-ux"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://baymard.com/learn/findability-vs-discoverability-ux
                              </a>
                            </li>
                            <li>
                              <a
                                href=" https://uxmastery.com/resources/techniques/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {" "}
                                https://uxmastery.com/resources/techniques/
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxdesign.cc/the-ultimate-guide-to-stakeholder-interviews-understand-your-clients-a3bcf87b6e8b"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxdesign.cc/the-ultimate-guide-to-stakeholder-interviews-understand-your-clients-a3bcf87b6e8b
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.fao.org/3/w3241e/w3241e05.htm"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://www.fao.org/3/w3241e/w3241e05.htm
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxdesign.cc/card-sorting-what-how-the-perks-29f6cb020270"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxdesign.cc/card-sorting-what-how-the-perks-29f6cb020270
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxdesign.cc/ux-storyboarding-2ce43875f3de"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxdesign.cc/ux-storyboarding-2ce43875f3de
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://uxdesign.cc/writing-usecases-for-a-design-document-56e41d883d3a"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://uxdesign.cc/writing-usecases-for-a-design-document-56e41d883d3a
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://theproductmanager.com/topics/prototyping-vs-wireframing/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                https://theproductmanager.com/topics/prototyping-vs-wireframing/
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </ServiceDescription>
                  </React.Fragment>
                )}
              />
              <Route
                exact
                path="/services/ecommerce"
                render={() => (
                  <React.Fragment>
                    <ServiceDescription>
                      <article className="content_service_article_container">
                        <div className="first-child-p">
                          <p>
                            The e-commerce consist in the sale or purchase of
                            some product or service through Internet,commonly it
                            has a payment gateway and also has a bunch of
                            dashboards that allow the delivery of the
                            merchandise.To make it work properly we have to have
                            custom dashboards or custom User Interfaces to
                            manage administrative, commercial and logistical
                            procedures.It is also important to keep in mind that
                            we have to deal with the delivery time of the
                            products or services as well as a real-time
                            notification system to avoid delays.
                          </p>
                          <p>
                            In my opinion I think that key for the success in
                            e-commerce is have a plan of business or model of
                            business specially with a diagram about the flow of
                            your ecommerce because you will need receive and
                            send notifications so you will need a bunch of User
                            Interfaces synchonized for example when you received
                            a new payment transaction, then the system should
                            send a notification to customer saying that you are
                            sending the product,finally you will need receive a
                            notification when your customer received the product
                            succesfully.With a model of business you will have
                            clear: your final user,your target audience, your
                            competitor analysis and more details about the
                            operation of your future business.
                          </p>
                          <p>
                            In Costa Rica there are certain laws that regulate
                            e-commerce and protect the consumer, although these
                            laws may not be applied in other countries, it is
                            never too much to comply with the regulations that
                            the political constitution of Costa Rica has, since
                            they are general aspects that can perfectly be
                            applied to any country and that protect the consumer
                            and intellectual property, obviously it is always
                            important to review the laws and regulations that
                            e-commerce has in the country in which you want to
                            create the e-commerce app, among them. The following
                            stand out: Data Protection, Consumer Protection,
                            Product or service delivery ,Product return policy
                            and Intellectual property.
                          </p>
                        </div>

                        <div className="bg_white">
                          <h3>Data Protection</h3>
                          <p>
                            The correct treatment of the data must be ensured
                            and ensured, the informed consent of the users must
                            be obtained and the user must be informed about the
                            rules of how the personal data of its users will be
                            processed. the user of the following:
                          </p>
                          <ul>
                            <li>The existence of a personal data base.</li>
                            <li>
                              Of the purposes pursued with the collection of
                              this data.
                            </li>
                            <li>
                              Of the recipients of the information, as well as
                              who may consult it.
                            </li>
                            <li>
                              The mandatory or optional nature of their answers
                              to the questions that are asked during the data
                              collection.
                            </li>
                            <li>
                              The treatment that will be given to the requested
                              data.
                            </li>
                            <li>
                              Of the consequences of refusing to provide the
                              data.
                            </li>
                            <li>
                              Of the possibility of exercising the rights that
                              assist you.
                            </li>
                            <li>
                              Of the identity and address of the person in
                              charge of the database.
                            </li>
                          </ul>
                          <h3>Electronic Commerce and Consumer Protection</h3>
                          <p>
                            Information must be clear, precise, sufficient,
                            accessible, up-to-date and in a language that is
                            easy to understand,everything related to:
                          </p>
                          <ul>
                            <li>Company information.</li>
                            <li>
                              The information of the good or service offered.
                            </li>
                            <li>Information about the transaction.</li>
                            <li>
                              Information about the price, discounts and taxes.
                            </li>
                          </ul>
                          <h3>Product delivery and product return policy</h3>
                          <p>
                            The e-commerce establishment must establish
                            precisely and clearly the delivery conditions of the
                            product, that is, inform the consumer if the
                            delivery of the good is carried out by the company
                            or if it hires a third party for this service, or
                            rather, if it will be the customer who must pick up
                            the product at the trade facilities.
                          </p>
                          <h3>Intellectual Property:</h3>
                          <p>
                            We must ensure the protection of intellectual
                            property, for this reason it is good practice to
                            specify them in the privacy policies and the terms
                            and conditions of the app, as well as try to encrypt
                            or protect sensitive resources or data as much as
                            possible. The most relevant elements that could be
                            protected through Industrial Property laws are:
                          </p>
                          <ul>
                            <li>
                              The contents of the website: texts, photographs,
                              graphics, music or videos.
                            </li>
                            <li>The Databases</li>
                            <li>
                              Trade names, logos, product names or the domain of
                              the website itself.
                            </li>
                            <li>
                              The design of the Web site, if it has been an
                              exclusive and unique creation for your site, could
                              be protected by copyright.
                            </li>
                            <li>
                              The e-commerce platforms or other exclusive
                              functionalities that run and are offered to their
                              users on the Web platform.
                            </li>
                          </ul>
                          <h3>Other considerations</h3>
                          <p>
                            An online business must pay attention to various
                            other legal issues that could affect its
                            profitability if it does not provide the
                            corresponding provisions:
                          </p>
                          <h4>Domain management:</h4>
                          <p>
                            The domain name is the address or URL that the
                            website will have, therefore one of the most
                            important elements, since this will be the way in
                            which users will reach electronic commerce, it is
                            vitally important to take all appropriate security
                            measures. and legal to avoid losing the domain name,
                            either due to an attack by cybercriminals, due to
                            conflicts with the developers of the website or also
                            due to problems of interest between the company's
                            own partners, since there have been cases in which
                            one of the Partners leave the project and take
                            domain ownership and management with them, causing
                            enormous damage to the company by forcing them to
                            find a new domain name, causing considerable impact
                            to the operation of the business.
                          </p>
                          <h4>
                            The legal contracts with the developers of the
                            platform or the agency that manages the website.
                          </h4>
                          <h4>Tax obligations</h4>
                          <p>
                            An electronic commerce site pays the same taxes as a
                            traditional business or company, so they must make
                            sure to pay income tax on profits, VAT and other tax
                            charges of a legal entity or natural person that
                            exercises trade.
                          </p>
                          <h4>Rules of conduct for users</h4>
                          <p>
                            If the website is an eMarketplace that brings
                            together sellers and buyers or that manages some
                            kind of community, it is important to have a clear
                            code of conduct with the rules and regulations of
                            the platform, so that users know and are certain of
                            what can be done. or cannot be done on site.
                          </p>
                          <h4>Specific industries</h4>
                          <p>
                            If the company's activity responds to a specific
                            industry such as finance or health, or its product
                            or service is aimed at minors, it is a priority that
                            they know all the special regulations that apply to
                            these types of industry and ensure that they comply
                            with the provisions of the law to avoid fines or
                            penalties.
                          </p>
                          <p>
                            Actually exists a bunch of platforms or CMS for
                            e-commerce such as Woocommerce, or something more
                            premiun like Prestashop or Shopify also you can buy
                            your products on e-Bay.If you like something more
                            custom with microfrontends and microservices with
                            modern solutions I can give you something more
                            custom focused in nodejs and React.
                          </p>
                          <h3>References</h3>
                          <ul>
                            <li>
                              <a
                                href="https://golegalcr.com/regulacion-comercio-electronico-en-costa-rica/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://golegalcr.com/regulacion-comercio-electronico-en-costa-rica/
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </ServiceDescription>
                  </React.Fragment>
                )}
              />
            </Router>
          </TransitionGroup>
        </div>
      </article>
    </React.Fragment>
  );
};
export default Services;
