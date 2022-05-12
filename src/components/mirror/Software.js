import React from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";

function Software() {
  return (
    <Box>
      {" "}
      <Typography variant="body1" color="text.primary">
        The magic mirror often serves as a “home assistant” or “command center”,
        displaying relevant information like the time, weather, or to-dos. To
        achieve this, we need a computer with internet access. Enter the{" "}
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
        Setup The RaspberryPi
      </Typography>
      <Typography variant="body1" color="text.primary">
        The first step is to configure your RaspberryPi. I immediately threw my
        brand new Pi into{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07WMG27T7/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"
        >
          a case with passive cooling
        </Link>
        . This case will protect my Pi from drops or spills during the
        development process, and prevent it from baking in the mirror housing.
        The extremely comprehensive{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.raspberrypi.com/documentation/computers/getting-started.html"
        >
          Official Raspberry Pi Documentation
        </Link>{" "}
        walked me through the initial boot step by step. As recommended, I used
        the{" "}
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
        . I inserted the microSD and connected a keyboard and mouse to the USB.
        I learned to connect my Pi to a monitor using a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07TTKD38N/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"
        >
          micro HDMI cable
        </Link>
        , before connecting the Pi to power (sometimes the Pi can struggle to
        recognize externals plugged in after power is supplied). Once the
        Raspberry Pi is plugged in, it should automatically boot. I followed the
        RaspberryPi OS setup prompts, including connecting to my wifi network. I
        even elected to rotate the RaspberryPi from{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://pimylifeup.com/raspberry-pi-rotate-screen/"
        >
          landscape to portrait mode
        </Link>{" "}
        to give it a more mirror-y feel.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Setup The Development Environment
      </Typography>
      <Typography variant="body1" color="text.primary">
        The platform I chose for the mirror is called{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://magicmirror.builders/"
        >
          MagicMirror^2
        </Link>
        . It’s open source, has tons of 3rd-party modules, and even has a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://forum.magicmirror.builders/"
        >
          community forum
        </Link>{" "}
        to discuss issues. The MagicMirror^2 platform is an{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.electronjs.org/"
        >
          Electron
        </Link>{" "}
        app, which is a framework to build desktop applications using
        JavaScript, HTML, and CSS. I would recommend you have a basic
        understanding of Electron, as well as{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://nodejs.dev/learn"
        >
          Node.js
        </Link>
        (JavaScript runtime environment) and{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
        >
          web technologies.
        </Link>
      </Typography>
      <Typography variant="body1" color="text.primary">
        As a web developer, I use Github for version control every day. Version
        control allows developers to track the who, when, and what of changes
        made to code. A remote repository hosted on Github serves as a backup
        for your code. You can also pull your code down and edit it from any
        computer! If you aren’t familiar with version control, follow the steps
        to set up your{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://projects.raspberrypi.org/en/projects/getting-started-with-git/0"
        >
          Git account on the RaspberryPi
        </Link>
        . You can read more about Github and Git via the{" "}
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
        It was time to install MagicMirror^2 platform. As listed in the
        MagicMirror^2 docs, there are various installation methods including an
        automatic installer script, Docker image, and even a MagicMirrorOS!
        However, I chose the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://docs.magicmirror.builders/getting-started/installation.html#manual-installation"
        >
          manual installation
        </Link>{" "}
        as I think it’s the easiest and lightest. I made a slight change when I
        cloned my repo. Instead of cloning from ​​/MichMich/MagicMirror, I went
        to my github account and forked the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://github.com/MichMich/MagicMirror"
        >
          MagicMirror repo
        </Link>
        , and then cloned the repo from my own fork.
        <code>
          git clone https://github.com/Your-Username/MagicMirror.git
        </code>{" "}
        Additionally, I added the official MagicMirror repo as an upstream
        remote repo.{" "}
        <code>
          git remote add upstream https://github.com/MichMich/MagicMirror.git
        </code>{" "}
        This allows you to easily fetch and merge changes that are made to the
        upstream repo to keep your MagicMirror platform up to date with the
        latest releases!
      </Typography>
      <Typography variant="body1" color="text.primary">
        Because you will be editing the files of the MagicMirror^2 repo, you’ll
        want an IDE, or integrated development environment. An IDE is software
        to help you write, debug, and run code. My first choice is{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://code.visualstudio.com/#"
        >
          Visual Studio Code
        </Link>
        . Choose the Linux x64 .deb stable build for download. (RaspberryPi OS
        is based on Debian OS, which is a distro of the Linux OS, hence the .deb
        file ending). VSCode has a lot of 3rd-party extensions to super-charge
        your development process. I immediately added{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://prettier.io/"
        >
          Prettier
        </Link>
        , a code formatter, that will prevent syntax errors in your config.js
        file. Click View → Command Palette → Type “Preferences: Open Settings
        (JSON)” and paste this at the bottom of your settings.json and save the
        file. Next, follow the MagicMirror^2 configuration options, which shows
        you how to install a{" "}
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
        Before you start developing, you’ll probably want to kill the
        MagicMirror^2 process: <code>pm2 stop mm</code> Now for the fun part:
        configure the mirror modules! Each “widget” on the screen of the Mirror
        (called modules) can be added, customized, or removed, such as the
        clock, calendar, and compliments modules. There are default modules that
        come installed with the official MagicMirror^2 platform, but there are
        tons of{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules"
        >
          3rd party modules
        </Link>
        available. Each module (should)include some documentation on how to
        install it, but most will consist of cloning the modules and{" "}
        <code>npm install</code> inside this new module directory. Other modules
        will require you to create a developer account with a service and obtain
        an API key to fetch data.
      </Typography>
      <Typography variant="body1" color="text.primary">
        The easiest way to view the changes you make to your MagicMirror^2 is to
        open a browser tab and navigate to the address that the mirror app is
        being served to. (The electron window is great for displaying, but not
        for developing as the entire app has to be killed and relaunched to see
        changes). The default address, found in the config.js is localhost:8080.
        Save your changes and refresh your browser to see your changes
        reflected! If you’re not seeing your changes, or seeing a config error,
        run: <code>npm run config:check</code>The most common error is a syntax
        error (did you forget a curly brace )? Formatting with Prettier can help
        to avoid these mistakes.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Once you’re happy with your initial configuration and modules, push to
        your github repo:{" "}
        <code>
          git add .<br />
          git commit -m “added first module”
          <br />
          git push
        </code>{" "}
        For the adventurous, you can even{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://docs.magicmirror.builders/modules/customcss.html"
        >
          customize the CSS
        </Link>
        of the modules on the MagicMirror. There’s not much information in the
        MagicMirror^2 docs about CSS, but the MagicMirror^2 forums have a{" "}
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
        the MagicMirror running in your browser, right click <i>inspect</i>. You
        should see a small icon depicting a mouse over a rectangle. Click it.
        Now try hovering over the date in the UI. The inspector tool tells us
        the CSS class name for the date element is{" "}
        <code>date.normal.medium</code> Inside your MagicMirror repo, navigate
        to the css folder and create a file custom.css. Write a new rule set
        targeting the class of your date element. Save, refresh, and check
        back!You can do this for any element of the MagicMirror, and change many
        properties including font size, style, size, shadows, animations and
        more.
      </Typography>
    </Box>
  );
}

export default Software;
