import React from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import ImageModal from "../ImageModal";
import Code from "./Code";

function Software() {
  return (
    <Box>
      {" "}
      <Typography variant="body1" color="text.primary">
        To power the Mirror’s widgets, you need a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.bestbuy.com/site/canakit-raspberry-pi-4-basic-kit/6405651.p?skuId=6405651&ref=17&loc=11&CampaignID=1161323&SubscriberID=569113989"
        >
          RaspberryPi
        </Link>
        , a credit card sized fully functioning and wifi ready computer.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Set up The RaspberryPi
      </Typography>
      <Typography variant="body1" color="text.primary">
        Put your new Pi into{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07WMG27T7/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"
        >
          a case with passive cooling
        </Link>
        . This case will protect your Pi during the development process and
        prevent it from baking in the Magic Mirror housing.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Follow the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.raspberrypi.com/documentation/computers/getting-started.html"
        >
          Official Raspberry Pi Documentation
        </Link>{" "}
        to boot the RaspberryPi for the first time. I used the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.raspberrypi.com/software/"
        >
          Raspberry Pi Imager
        </Link>{" "}
        to flash the RaspberryPi OS onto a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.walmart.com/ip/onn-128GB-Class-10-U3-V30-MicroSDXC-Flash-Memory-Card-with-Adapter/924250954"
        >
          microSD card
        </Link>
        . Insert the microSD and connect a keyboard and mouse to the Pi. I
        learned to connect my Pi to a monitor, using a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07TTKD38N/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"
        >
          micro HDMI cable
        </Link>
        , before connecting the Pi to power (sometimes the Pi can struggle to
        recognize externals plugged in after power is supplied). Once your
        RaspberryPi is plugged in, it should automatically boot from the microSD
        card. Follow the RaspberryPi OS setup prompts, including connecting to
        your wifi network. You can choose to rotate the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://pimylifeup.com/raspberry-pi-rotate-screen/"
        >
          RaspberryPi from landscape to portrait mode
        </Link>{" "}
        to emulate the typical orientation of a real mirror.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Setup The Development Environment
      </Typography>
      <Typography variant="body1" color="text.primary">
        The most popular platform to display the Magic Mirror widgets is{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://magicmirror.builders/"
        >
          MagicMirror<sup>2</sup>
        </Link>
        . It is open source, has tons of 3rd-party modules, and even has a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://forum.magicmirror.builders/"
        >
          community forum
        </Link>{" "}
        to discuss issues. The MagicMirror<sup>2</sup> platform is an{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.electronjs.org/"
        >
          Electron
        </Link>{" "}
        app, a framework to build desktop applications using JavaScript, HTML,
        and CSS. As a Node.js developer, it was so helpful to have an
        understanding of Electron, as well as{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://nodejs.dev/learn"
        >
          Node.js
        </Link>
        (JavaScript runtime environment), and{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
        >
          web technologies.
        </Link>
      </Typography>
      <Typography variant="body1" color="text.primary">
        Before you start customizing your MagicMirror<sup>2</sup> app, consider
        using version control. As a developer, I use Git and Github everyday to
        track and manage code changes working in a fully remote team. If you
        aren’t familiar with version control, follow the steps to set up your{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://projects.raspberrypi.org/en/projects/getting-started-with-git/0"
        >
          Git account on the RaspberryPi
        </Link>
        . A Github repository serves as a backup for your code. You can read
        more about Github and Git via the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://docs.github.com/en/get-started"
        >
          Github docs
        </Link>
        .
      </Typography>
      <Typography variant="body1" color="text.primary">
        MagicMirror<sup>2</sup> docs contain multiple installation methods
        including an automatic installer script, Docker image, and even a
        MagicMirrorOS! I chose the lighter{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://docs.magicmirror.builders/getting-started/installation.html#manual-installation"
        >
          manual installation
        </Link>{" "}
        , but I made a slight change when I cloned my repo: instead of cloning
        from ​​/MichMich/MagicMirror, I started from my Github account and
        forked the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://github.com/MichMich/MagicMirror"
        >
          MagicMirror repo
        </Link>
        , and then cloned the repo from my own fork.{" "}
        <Code text="git clone https://github.com/Your-Username/MagicMirror.git" />
        Additionally, I added the official MagicMirror repo as an upstream
        remote repo:
        <Code text="git remote add upstream https://github.com/MichMich/MagicMirror.git" />
        This upstream remote allows you to easily fetch and merge the latest
        MagicMirror<sup>2</sup> code.
      </Typography>
      <Typography variant="body1" color="text.primary">
        To edit the files of your MagicMirror<sup>2</sup> repo, use an IDE, or
        integrated development environment. An IDE is software to help you
        write, debug, and run code. My first choice for Javascript code is{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://code.visualstudio.com/#"
        >
          Visual Studio Code
        </Link>
        . Download the Linux x64 .deb stable build to your Pi. (RaspberryPi OS
        is based on Debian OS, which is a distro of Linux, hence the .deb file
        ending). VSCode has a lot of 3rd-party extensions to supercharge your
        development process. I added{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://prettier.io/"
        >
          Prettier
        </Link>
        , a code formatter, that will help you spot syntax errors in your
        config.js file. To add Prettier click View → Command Palette → Type
        “Preferences: Open Settings (JSON)” and paste this at the bottom of your
        settings.json and save the file:
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="prettier settings"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/prettier_settings.png"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Continue to follow the MagicMirror<sup>2</sup> configuration options,
        which shows you how to install a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/"
        >
          process manager, pm2
        </Link>
        , that autostarts the mirror application as soon as the RaspberryPi
        boots.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Customize The Modules
      </Typography>
      <Typography variant="body1" color="text.primary">
        Before you start developing, kill the MagicMirror<sup>2</sup> process:
      </Typography>
      <Code text="pm2 stop mm" />
      <Typography variant="body1" color="text.primary">
        Now for the fun part: configure the mirror modules! The default widgets
        on the screen of the Magic Mirror (called modules) include a clock,
        weather, and compliments. There are also a host of{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules"
        >
          3rd party modules{" "}
        </Link>
        available. Most modules will consist of cloning the module’s repo and{" "}
        <Code text="npm install" />
        inside the new module directory. Other modules will require you to
        create a developer account with a service and obtain an API key to fetch
        data. Check the documentation for each 3rd party module.
      </Typography>
      <Typography variant="body1" color="text.primary">
        View the changes to your MagicMirror<sup>2</sup> during development by
        opening a browser tab and navigating to the
        <Code text="address:port" />
        value in the config.js. The default is
        <Code text="localhost:8080" />
        After you make a change, save your files and refresh this browser tab.
        The default Electron window should be used for displaying the mirror (or
        your production environment 😁), but not for development as the entire
        platform has to be killed and relaunched to reflect changes. If you’re
        not seeing your changes or you are seeing a config error, run:
        <Code text="npm run config:check" />
        The most common error is a syntax error (did you forget a closing
        bracket)? Formatting with Prettier can help you avoid these mistakes.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Once you’re happy with your initial configuration and modules, push to
        your Github repo: <Code text=" git add ." />
        <Code text="git commit -m “added first module”" />
        <Code text="git push" /> For the adventurous, you can even{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://docs.magicmirror.builders/modules/customcss.html"
        >
          customize the CSS{" "}
        </Link>
        of the modules on the MagicMirror. There’s not much information in the
        MagicMirror<sup>2</sup> docs about CSS, but the forums have a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://forum.magicmirror.builders/category/8/custom-css"
        >
          dedicated CSS category
        </Link>
        .
      </Typography>
      <Typography variant="body1" color="text.primary">
        Let’s walk through an example of changing the color of the date. From
        the MagicMirror<sup>2</sup> running in your browser, right click{" "}
        <i>inspect</i>. You should see a small icon depicting a mouse over a
        rectangle. Click it.
        <ImageModal
          margin="5px auto"
          altText="browser inspector"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/inspector.png"
          height="400px"
          width="400px"
        />
        Now try hovering over the date in the UI. The inspector tool tells us
        the CSS class name for the date element is{" "}
        <Code text="date.normal.medium" />
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="date element class"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/date_class.png"
        height="300px"
        width="400px"
      />
      <Typography variant="body1" color="text.primary">
        Inside your MagicMirror<sup>2</sup> repo, navigate to the css folder and
        create a file custom.css. Write a new rule set targeting the class of
        your date element:
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="css class"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/css_class_date.png"
        height="300px"
        width="400px"
      />
      <Typography variant="body1" color="text.primary">
        Save, refresh, and check back!{" "}
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="green date element"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/green_date.png"
        height="300px"
        width="400px"
      />
      <Typography variant="body1" color="text.primary">
        You can do this for any element of the MagicMirror, using any valid CSS
        properties.
      </Typography>
    </Box>
  );
}

export default Software;
