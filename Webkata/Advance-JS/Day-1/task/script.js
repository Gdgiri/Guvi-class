let count = document.getElementById("count");

setTimeout(() => {
  count.innerHTML = `<h1><b>10<b></h1>`;
  document.body.append(count);
  console.log("10");
  setTimeout(() => {
    count.innerHTML = `<h1><b>9<b></h1>`;
    document.body.append(count);

    console.log("9");

    setTimeout(() => {
      count.innerHTML = `<h1><b>8<b></h1>`;
      document.body.append(count);

      console.log("8");

      setTimeout(() => {
        count.innerHTML = `<h1><b>7<b></h1>`;
        document.body.append(count);
        console.log("7");

        setTimeout(() => {
          count.innerHTML = `<h1><b>6<b></h1>`;
          document.body.append(count);
          console.log("6");

          setTimeout(() => {
            count.innerHTML = `<h1><b>5<b></h1>`;
            document.body.append(count);
            console.log("5");

            setTimeout(() => {
              count.innerHTML = `<h1><b>4<b></h1>`;
              document.body.append(count);
              console.log("4");

              setTimeout(() => {
                count.innerHTML = `<h1><b>3<b></h1>`;
                document.body.append(count);
                console.log("3");

                setTimeout(() => {
                  count.innerHTML = `<h1><b>2<b></h1>`;
                  document.body.append(count);
                  console.log("2");

                  setTimeout(() => {
                    count.innerHTML = `<h1><b>1<b></h1>`;
                    document.body.append(count);
                    console.log("1");

                    setTimeout(() => {
                      count.innerHTML = `<h1><b>0<b></h1>`;
                      document.body.append(count);
                      console.log("0");

                      setTimeout(() => {
                        count.innerHTML = `<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhigssoftware.com%2Fblog%2Fimages%2Fhappy-independence-day.png&f=1&nofb=1&ipt=d8d5aab51101050196d1a317a0142477872113633d53645eb1f324881e67a651&ipo=images" alt="HAPPY INDEPENDENCE DAY">`;
                        document.body.append(count);
                        console.log("HAPPY INDEPENDENCE DAY");
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
