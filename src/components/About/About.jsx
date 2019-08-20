import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import aboutStyle from './about.module.css'

class About extends React.Component {
  render() {
    return (
      <StaticQuery
        query={aboutQuery}
        render={data => {
          const { avatar } = data

          return (
            <React.Fragment>
              <div className={aboutStyle.introContainer}>
                <div className={aboutStyle.avatarWrapper}>
                  <img
                    alt="Profile photo of Suzanne"
                    src={avatar.edges[0].node.publicURL}
                    className={aboutStyle.avatar}
                  />
                </div>
                <div>
                  <h1>About</h1>
                  <p>
                    Hi! My name's Suzanne and I'm a software engineer based in
                    Edinburgh. Working for <a href="http://bemo.co">Bemo</a>, I
                    help develop applications for a wide range of clients
                    ranging from small companies to major national brands. I
                    work across a variety of languages and frameworks, but at
                    the moment the majority of my frontend work is in React.
                  </p>
                  <p>
                    If you like, you can find me over on{' '}
                    <a href="https://www.linkedin.com/in/suzanne-aitchison-59aa2838/">
                      LinkedIn
                    </a>
                    , <a href="https://twitter.com/s_aitchison">Twitter</a>,{' '}
                    <a href="https://dev.to/s_aitchison">Dev</a>, or just reach
                    out via the <Link to="/contact">Contact Form</Link>.
                  </p>
                </div>
              </div>

              <h2>Why did I start Up Your A11y?</h2>
              <p>
                Through working on a project with a large national brand, my
                eyes were opened to just how little I understood about web
                accessibility, despite working with web apps for some time. A
                few things really struck me:
              </p>

              <ol>
                <li>
                  Accessible practices had been far from central to my way of
                  approaching development
                </li>
                <li>
                  There was a lot I took for granted in terms of accessibility
                  having come originally from an Android app development
                  background. It seems there are a lot more things to know and
                  be mindful of in web development
                </li>
                <li>
                  Almost everyone in my engineering team felt they could learn
                  more about how our apps should perform in terms of keyboard
                  and screen reader usage
                </li>
              </ol>
              <p>
                I soon fell down a rabbit hole of learning, and found lots of
                great resources online, many of which you'll find referenced
                throughout this site. My eyes were gradually opened, and I
                started collecting notes and examples to more easily refer back
                to later. These notes became a "lunch and learn" session for my
                colleagues, and later I decided to write them up into short
                articles and tutorials. In large part this was for my own
                learning and reference, but also to share here on Up Your A11y,
                in the hope that it will help someone else in a similar position
                to me.
              </p>
              <h2>Why the React focus?</h2>
              <p>
                Where I found it most difficult to find resources, examples and
                answers was where the accessibility concern I was trying to
                address was directly tied to coding Single Page Applications. I
                found myself lost on route changes, with focus seemingly in
                random places. I realised I'd taken for granted my nifty
                component was fit for purpose across different locations in my
                app without considering the heading level etc. I hadn't properly
                considered page titles, and so on.
              </p>
              <p>
                I’ve therefore given Up Your A11y a React bias, partly because
                it's what I know, but also because it's those React/SPA specific
                topics that represented the biggest 'Aha!' moments for me. While
                the React docs are great, I think it's useful to gather those
                React-specific considerations together alongside more general
                accessibility principles and tutorials.
              </p>
              <h2>Moving forward</h2>
              <p>
                I'm by no means an accessibility expert. I'm learning every day,
                and hope to keep expanding this site with more topics and
                examples, and I’d really appreciate any engagement from anyone
                who’s visited the site. You can connect with me using any of the
                methods highlighted above - I’d really value any feedback,
                thoughts and ideas. Of course if you spot a bug or something
                that’s not quite right in any of the articles I’d also love to
                know!
              </p>
            </React.Fragment>
          )
        }}
      />
    )
  }
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: allFile(filter: { name: { eq: "avatar" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default About
