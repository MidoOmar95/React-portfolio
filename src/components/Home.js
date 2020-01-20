import React from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import resumeData from "./resumeData";
import ReactLoading from "react-loading";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      resumeData: resumeData
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
  }

  render() {
    return (
      <div className="App">
         {!this.state.done ? (
        <div style={{height:"100vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
          <ReactLoading type={"bars"} color={"white"} height={"200px"} width={"200px"}/>
          </div>
        ) : (
        <div>
        <Header resumeData={this.state.resumeData} />
        <About resumeData={this.state.resumeData} />
        <Resume resumeData={this.state.resumeData} />
        <Portfolio resumeData={this.state.resumeData} />
        <ContactUs resumeData={this.state.resumeData} />
        <Footer resumeData={this.state.resumeData} />
        </div>
        )}
      </div>
    );
  }
}
