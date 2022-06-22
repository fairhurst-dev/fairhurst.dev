import React from "react";
import {
  ListItem,
  ListItemText,
  List,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import ImageModal from "../ImageModal";
import Code from "./Code";

function Hardware() {
  return (
    <Box>
      <Typography variant="body1" color="text.primary">
        My job as a software developer leveraging web technologies and version
        control prepared me for the software implementation of the mirror. But
        the hardware proved much more challenging for me; I had never built
        anything using wood before.
      </Typography>
      <Typography variant="body1" color="text.primary">
        My criteria for successful mirror housing were:{" "}
      </Typography>
      <List
        sx={{
          borderColor: "secondary.main",
          borderWidth: "5px",
          borderStyle: "solid",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        {" "}
        <ListItem>
          <ListItemText>
            1. Minimize light spilling into the mirror housing
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            2.Conceal the wires without baking the Raspberry Pi
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>3. Hang the unit on the wall</ListItemText>
        </ListItem>
      </List>
      <Typography variant="body1" color="text.primary">
        My mirror housing design consisted of a frame, a piece of one-way glass
        attached to the frame back, followed by the monitor lying directly on
        top of the glass. The monitor and glass were encased with a “dummy box”
        attached to the back of the frame. Lastly, a piece of plywood with a
        french cleat was attached to the back of the dummy box.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="exploded view"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/labeled_exploded_view.png"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Your Magic Mirror housing will depend on your monitor and glass
        dimensions and design preferences! I gleaned inspiration for the housing
        from:
      </Typography>
      <List sx={{ ml: 3 }}>
        <ListItem>
          <Typography variant="body1" color="text.primary">
            <Link
              color="secondary.main"
              target="_blank"
              href="https://www.youtube.com/watch?v=OYlloiaBINo"
            >
              DIY Smart Mirror - Full Tutorial
            </Link>
          </Typography>
        </ListItem>{" "}
        <ListItem>
          <Typography variant="body1" color="text.primary">
            <Link
              color="secondary.main"
              target="_blank"
              href="https://www.youtube.com/watch?v=fkVBAcvbrjU"
            >
              How to Make a Raspberry Pi Smart Mirror
            </Link>
          </Typography>{" "}
        </ListItem>{" "}
        <ListItem>
          <Typography variant="body1" color="text.primary">
            <Link
              color="secondary.main"
              target="_blank"
              href="http://blog.dylanjpierce.com/raspberrypi/magicmirror/tutorial/2015/12/27/build-a-magic-mirror.html"
            >
              Building MirrorMirror – /home/pierce
            </Link>
          </Typography>{" "}
        </ListItem>
      </List>
      <Typography variant="body1" color="text.primary">
        I encourage you to sketch or render your design for the housing before
        you ever purchase a piece of wood. I began by hand-drawing my designs:
      </Typography>
      <Grid container>
        <ImageModal
          margin="5px auto"
          altText="hand sketch frame"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/hand_sketch_1.png"
          height="400px"
          width="400px"
        />
        <ImageModal
          margin="5px auto"
          altText="hand sketch box"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/hand_sketch_2.png"
          height="400px"
          width="400px"
        />
      </Grid>
      <Typography variant="body1" color="text.primary">
        Then I 3D rendered the design using{" "}
        <Link
          color="secondary.main"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ptc.com/en/products/education/free-software/creo-college-download"
        >
          Creo Parametric.
        </Link>{" "}
        <br />
        <Link
          href="/assets/magic_mirror_modeling.zip"
          color="secondary.main"
          target="_self"
          download
        >
          {" "}
          Click to download all the 3D files for my mirror housing
        </Link>
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Gather Your Materials
      </Typography>
      <Typography variant="body1" color="text.primary">
        Start by obtaining a monitor and a piece of glass, as this will dictate
        all of the dimensions for your housing. Here are the specs for the
        monitor I used (unfortunately because it is older, I could not find a
        link to the exact monitor):
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="monitor specs"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/monitor_specs.png"
        height="400px"
        width="400px"
      />
      <Typography variant="body1" color="text.primary">
        This monitor had been lying unused in a cardboard box, and my friend
        Mark so generously gifted it to me. In the spirit of being sustainable,
        I highly encourage you to also reuse a screen you have such as an old
        computer monitor or TV, or pick-up a used monitor.
      </Typography>
      <Typography variant="body1" color="text.primary">
        The thinner the monitor, the lighter your mirror will be and the closer
        it will sit to the wall. It can help to find a monitor with inputs on
        the back of the monitor as opposed to the bottom. This will allow your
        housing to fit snugly around the monitor, without drilling holes to
        conceal wires.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Strip your monitor of its plastic casing and bezel. This will help to
        satisfy design constraint 1: minimizing light spilling into the housing.
        Less light spilling equals brighter and clearer MagicMirror<sup>2</sup>{" "}
        modules. Stripping the casing will vary by monitor; I had to remove tiny
        screws to allow myself to pry the plastic case open. I also removed the
        metal bezel around the front of the monitor using my fingers and a
        flathead screwdriver. There was more metal casing around the back of the
        monitor that potentially could have been removed, but I left it intact
        to protect the monitor’s electronic components. Take measurements of
        your new naked monitor.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="monitor dimensions"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/monitor_dimensions.jpeg"
        height="600px"
        width="600px"
      />
      <Typography variant="body1" color="text.primary">
        Based on your monitor’s height and width, buy a piece of one-way glass
        (confusingly also called{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.aisglass.com/all-you-need-to-know-about-one-way-glass/"
        >
          two-way mirror glass
        </Link>
        ). This special glass reflects light from one side, and allows light to
        shine through the other. The mirror side of the glass faces outward,
        while the opposite side lies flat against your monitor, allowing the
        modules from your MagicMirror<sup>2</sup> platform to shine through!
        Look for glass no more than 1/4 inch thick to maximize the brightness
        and clarity of the modules.
      </Typography>{" "}
      <ImageModal
        margin="5px auto"
        altText="glass dimensions"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/glass_dimensions.png"
        height="600px"
        width="600px"
      />
      <Typography variant="body1" color="text.primary">
        One-way glass can be hard to find, and the pandemic caused prices to
        rise due to supply chain issues, resulting in a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.mynews13.com/fl/orlando/news/2021/03/03/pandemic-the-root-of-glass-manufacturing-lag--winter-park-business-owner-says"
        >
          glass shortage
        </Link>{" "}
        Buying one-way glass online can come with hefty shipping costs, and a
        single order of a custom cut piece of specialty glass can be very
        expensive. I opted to shop around my local building material suppliers
        and automobile glass distributors. Try to find a location that will
        allow for pickup to eliminate shipping costs. I had to call eight
        different stores before I found a shop that either carried two-way glass
        or quoted me a reasonable price:
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="glass quote"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/glass_quote.png"
        height="700px"
        width="700px"
      />
      <Typography variant="body1" color="text.primary">
        Still can not find a reasonable price? Some makers used{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://builtbyaz.com/smart-mirror/glass-or-acrylic/"
        >
          acrylic sheets or reflective film over a mirror
        </Link>
        . However, I did not want to experience any distortion while looking at
        my reflection in the mirror, so glass was the obvious choice.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Now for the wood. If you are a first-time woodworker like me, choose
        pine, a beginner-friendly type of wood. I bought{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Common-1-in-x-3-in-x-6-ft-Actual-0-75-in-x-2-5-in-x-6-ft-Pine-Board/1000070127"
        >
          two 3 x 6s
        </Link>{" "}
        and a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/15-32-in-Common-Pine-Sanded-Plywood-Application-as-2-x-2/3043814"
        >
          2 x 2ft piece of plywood
        </Link>
        .
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="pine plywood and boards"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/plywood.png"
        height="600px"
        width="400px"
      />
      <br />
      <Typography variant="h5" color="text.primary">
        Build The Frame
      </Typography>
      <Typography variant="body1" color="text.primary">
        The opening of the frame should be slightly smaller than the length and
        width of the piece of glass to provide a small lip for the glass to be
        attached to with{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/LOCTITE-Power-Grab-Ultimate-2-7oz-Crystal-Clear/1002641662"
        >
          silicone glue
        </Link>
        . My glass measured 15 9/16 x 12 11/16 inches. For the shorter boards of
        the frame, I subtracted 1/2 inch from each side, giving me 15 x 12 3/16
        inches. Before you cut the longer pieces of wood, remember to add in the
        width of the wood (in my case 2.5 inches per side). The end grain of the
        shorter boards will butt against the longer boards’ edges at a 90-degree
        angle. My final dimensions were 20 x 12 3/16 inches.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="frame dimensions"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/frame_dimensions.jpeg"
        height="600px"
        width="600px"
      />
      <Typography variant="body1" color="text.primary">
        After making the cuts, I used the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Pony-1-1-8-in-Corner-Clamp/1000989056"
        >
          corner clamp
        </Link>{" "}
        and the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Gorilla-Wood-Glue-Off-White-Interior-Exterior-Wood-Adhesive-Actual-Net-Contents-8-fl-oz/5002457557"
        >
          wood glue
        </Link>{" "}
        to attach the boards. Spread the glue on evenly, and clamp for at least
        30 minutes. After all sides are glued, allow the frame to dry overnight.
      </Typography>
      <Grid container>
        <ImageModal
          margin="5px auto"
          altText="clamped frame corner"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/clamped_frame_corner.png"
          height="500px"
          width="350px"
        />
        <ImageModal
          margin="5px auto"
          altText="frame and corner clamp"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/frame_and_clamp.png"
          height="500px"
          width="400px"
        />
      </Grid>
      <Typography variant="body1" color="text.primary">
        I reinforced my frame by screwing a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/ReliaBilt-RB-3-4-IN-ZN-CORNER-BRACE-4-CT/5001637033"
        >
          .75inch steel corner brace
        </Link>{" "}
        into each inner corner. I definitely would do this differently next
        time, so the corner braces are not visible.{" "}
      </Typography>
      <Typography variant="body1" color="text.primary">
        Next, sand your frame with{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/3M-25150P-G-Advanced-Sandpaper-11-Inches/dp/B00KW3WN8W/ref=sr_1_2?crid=RIGQDKI0IBQ4&keywords=p150+sandpaper&qid=1649791636&sprefix=p150+sandpaper%2Caps%2C242&sr=8-2"
        >
          fine sandpaper
        </Link>{" "}
        and then{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Minwax-Wood-Finish-Ebony-Oil-Based-Interior-Stain-Actual-Net-Contents-8-fl-oz/999914479"
        >
          stain
        </Link>
        . Although the stain recommended 2 coats, I actually used 3 to achieve a
        richer look. Allow your stain to dry overnight.
      </Typography>{" "}
      <ImageModal
        margin="5px auto"
        altText="stained frame"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/stained_frame.png"
        height="500px"
        width="400px"
      />
      <Typography variant="body1" color="text.primary">
        Place the stained side of the frame down and spread a line of silicone
        along the lip of the frame opening. Use a plastic knife or spoon to
        evenly spread the silicone on the frame. Carefully attach the one-way
        glass to the back of the frame, and remember to place the mirror side
        down! Stack heavy objects such as paint cans on the back of the glass to
        clamp it to the frame. Allow the silicone to dry for 24 hours.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="frame with mirror glass attached"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/frame_with_glass.png"
        height="500px"
        width="400px"
      />
      <br />
      <Typography variant="h5" color="text.primary">
        Build The Dummy Box
      </Typography>
      <Typography variant="body1" color="text.primary">
        Carefully lay your stripped monitor, screen-side down, on top of the
        glass. Take measurements of the stacked monitor and glass. My monitor
        and glass stack was 15 9/16 x 12 11/16 inches. To calculate the short
        sides of your dummy box, add in the thickness of the pieces of the wood
        (in my case .75 inches per side). The end grains of the long boards will
        butt against the face side of the short boards. My measurements for my
        two long boards were 15 9/16 inches, and my two short boards were 14
        3/16 inches.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="dummy box dimensions"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/dummy_box_dimensions.jpeg"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Use the corner clamp to glue and dry overnight. I used four more .75
        inch corner brackets to reinforce the inner corners of the box.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="dummy box corner"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/dummy_box_corner.png"
        height="500px"
        width="350px"
      />
      <Typography variant="body1" color="text.primary">
        {" "}
        Ensure the monitor is correctly lined up against the glass, and
        carefully place the dummy box over the stacked monitor and glass. Using
        the four{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.homedepot.com/p/Everbilt-4-in-Zinc-Plated-Heavy-Duty-Corner-Brace-2-Pack-15446/202034277"
        >
          corner braces
        </Link>
        , lay one in each corner of the dummy box flat against the back of the
        monitor. Mark the holes for the screws with a pencil, and screw the
        braces in. Remove the dummy box from the rest of the frame and monitor.
        Sand your dummy box and stain.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="corner brackets"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/corner_brackets.png"
        height="500px"
        width="350px"
      />
      <Typography variant="body1" color="text.primary">
        After the box dries overnight, carefully replace the dummy box back on
        your frame. Take your time to ensure the dummy box fits snugly around
        the stacked monitor and glass, and the edges of the dummy box are lying
        flat against the frame back. Screw four{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/National-Hardware-1-1-2-in-Steel-Zinc-Plated-Corner-Brace/1000201729"
        >
          1.5 inch corner brackets
        </Link>{" "}
        from the outer faces of the dummy box to the back of the frame.
        Important note: I did not glue the box to the frame; If the monitor
        fails, you need to be able to deconstruct the mirror housing to
        troubleshoot and potentially replace parts.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="box attached to frame"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/side_view.png"
        height="500px"
        width="350px"
      />
      <Typography variant="body1" color="text.primary">
        The last piece of wood is the back plywood board. Determine the
        orientation of your mirror, and note which side is the top. To determine
        the plywood width, measure from the outer faces of your top dummy box.
        To determine the length, measure from the outer top face of your dummy
        box to about 1/3rd of the length of the monitor. My back plate measured
        7 9/16 x 14 3/16 inches.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="backboard dimensions"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/backboard_dimensions.jpeg"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Apply the sandpaper and stain (for the last time 😆 ). Once dry, use a
        level and attach the picture side of your{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Hillman-6-in-Hangman-Picture-Hanging-System/3058191"
        >
          french cleat
        </Link>{" "}
        to the plywood. Use four 1.5 inch corner braces to attach the plywood to
        the dummy box.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="french cleat"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/french_cleat_plywood.jpeg"
        height="500px"
        width="500px"
      />
      <br />
      <Typography variant="h5" color="text.primary">
        Connect And Manage The Cables
      </Typography>
      <Typography variant="body1" color="text.primary">
        The old TFT monitor I repurposed only supported VGA. If you find
        yourself in the same situation, plug a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://thepihut.com/products/micro-hdmi-to-vga-adaptor"
        >
          microHDMI to VGA adapter
        </Link>{" "}
        to your Raspberry Pi, then connect the adapter to a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07HNXC5LZ/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
        >
          VGA to VGA cable
        </Link>
        , and plug the VGA cable into your monitor. Plug in your monitor’s{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B08F7DVY8G/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
        >
          power chord
        </Link>{" "}
        and the Raspberry Pi power to the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B01B8OG51O/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1"
        >
          AC Splitter
        </Link>
        .
      </Typography>
      <Typography variant="body1" color="text.primary">
        Use{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B0154MS9Q0/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
        >
          cable ties
        </Link>{" "}
        to separate the cords for the monitor power, Raspberry Pi power, and VGA
        cables. I attached squares of{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Scotch-12-Pack-1-in-Clear-Fastener/999989986"
        >
          clear velcro fasteners
        </Link>{" "}
        to the back of the power box for the Raspberry Pi and monitor. I then
        placed another square of velcro on the back of the monitor and velcroed
        the squares to secure.
        <ImageModal
          margin="5px auto"
          altText="velcro squares"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/velcro_squares.png"
          height="500px"
          width="350px"
        />
      </Typography>
      <Typography variant="body1" color="text.primary">
        I stuck a few{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B071FXZBMV/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
        >
          adhesive cord holders
        </Link>{" "}
        to the back of the monitor, and tucked the power and VGA cables into the
        slots.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="back view of mirror"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/back_view.png"
        height="500px"
        width="500px"
      />
      <br />
      <Typography variant="h5" color="text.primary">
        Hang, Test, and Enjoy!
      </Typography>
      <Typography variant="body1" color="text.primary">
        Select the best location to hang your mirror near a wall outlet. The
        French cleat will support up to 75 pounds in drywall, with no stud
        needed! However, this cleat will not work in plaster. If so, you need to
        find a stud and use a different hanging system. Place the wall side of
        the French cleat against the wall and use a pencil to mark the screw
        holes. Drill pilot holes, and then screw in the cleat.
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="french cleat in the wall"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/french_cleat_wall.jpeg"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Hang, and plug the A/C splitter into the wall outlet. The Raspberry Pi
        should boot automatically, and pm2 should start the MagicMirror
        <sup>2</sup> platform on launch! To turn the mirror off, you can{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.howtogeek.com/768053/how-to-ssh-into-your-raspberry-pi/"
        >
          SSH into your Raspberry Pi
        </Link>{" "}
        and type:
        <Code text="sudo shutdown now" />
        Or you can create an{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.youtube.com/watch?v=0sovQSeYcxs"
        >
          iPhone shortcut to SSH into your mirror
        </Link>
        .
      </Typography>
      <Typography variant="body1" color="text.primary">
        Lastly, you can add the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://github.com/Jopyth/MMM-Remote-Control"
        >
          MMM-Remote-Control{" "}
        </Link>
        to your Mirror. Access the remote via the IP address and port as
        specified in your config.js:
        <Code text="http://192.168.xxx.xxx:8080/remote.html" /> I created an{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.howtogeek.com/667910/how-to-add-a-website-to-your-iphone-or-ipad-home-screen/"
        >
          iPhone home screen shortcut{" "}
        </Link>{" "}
        from the web address!
      </Typography>
      <ImageModal
        margin="5px auto"
        altText="magic remote"
        imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_remote.png"
        height="500px"
        width="500px"
      />
      <Typography variant="body1" color="text.primary">
        Enjoy!
      </Typography>
      <Grid container>
        <ImageModal
          margin="5px auto"
          altText="Magic mirror"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_final_full.png"
          height="500px"
          width="300px"
        />
        <ImageModal
          margin="5px auto"
          altText="magic mirror ui detail"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_detail_1.png"
          height="500px"
          width="300px"
        />
      </Grid>
      <Grid container>
        <ImageModal
          margin="5px auto"
          altText="magic mirror ui"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_final_ui.png"
          height="500px"
          width="300px"
        />
        <ImageModal
          margin="5px auto"
          altText="magic mirror ui detail"
          imgURL="https://fairhurstdevassets.s3.amazonaws.com/mirror/magic_mirror_detail_2.png"
          height="500px"
          width="300px"
        />
      </Grid>
    </Box>
  );
}

export default Hardware;
