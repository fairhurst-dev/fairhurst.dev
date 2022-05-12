import React from "react";
import { ListItem, ListItemText, List, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";

function Hardware() {
  return (
    <Box>
      <Typography variant="body1" color="text.primary">
        My job as Javascript Software Developer leverages the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web"
        >
          web technologies
        </Link>{" "}
        every day that are necessary to configure the mirror’s software. But the
        hardware proved much more challenging for me; I had never built anything
        using wood before. The basic MagicMirror components are a computer
        monitor, a piece of one-way glass, and the RaspberryPi. My criteria for
        successful mirror housing was:
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
            1. Hold the one-way glass flush against the monitor to minimize
            light spillage
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            2. Conceal ugly wires without baking the RaspberryPi
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            3. Allow the entire unit to hang on the wall
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="body1" color="text.primary">
        My design for the mirror house consisted of a frame, piece of one-way
        glass attached to the back, then the monitor sandwiched on top, encased
        with a “dummy box”, lastly a piece of plywood with a french cleat on the
        back of the dummy box.
      </Typography>
      <Box marginBottom="5px" maxHeight="200px" maxWidth="200px">
        <img
          alt="exploded view"
          width="100%"
          src="https://fairhurstdevassets.s3.amazonaws.com/mirror/exploded_view_2.png"
        />
      </Box>
      <Typography variant="body1" color="text.primary">
        Everyone’s MagicMirror housing will be different, based on dimensions,
        engineering considerations, and design preferences! I gleaned
        inspiration from:
      </Typography>
      <List sx={{ ml: 3 }}>
        <ListItem>
          <Link
            color="#fff"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=OYlloiaBINo&t=343s&ab_channel=BreakItYourself"
          >
            DIY Smart Mirror - Full Tutorial
          </Link>
        </ListItem>{" "}
        <ListItem>
          {" "}
          <Link
            color="#fff"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=fkVBAcvbrjU&t=25s&ab_channel=HackerShack"
          >
            How to Make a Raspberry Pi Smart Mirror
          </Link>
        </ListItem>{" "}
        <ListItem>
          {" "}
          <Link
            color="#fff"
            target="_blank"
            rel="noopener noreferrer"
            href="http://blog.dylanjpierce.com/raspberrypi/magicmirror/tutorial/2015/12/27/build-a-magic-mirror.html"
          >
            Building MirrorMirror – /home/pierce
          </Link>
        </ListItem>
      </List>
      <Typography variant="body1" color="text.primary">
        I would highly recommend sketching or rendering your design for the
        housing before you begin building.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Gather Your Materials
      </Typography>
      <Typography variant="body1" color="text.primary">
        Before you ever cut a piece of wood for your mirror, you’ll first need
        to obtain a monitor. Here are the specs for the monitor I used
        (unfortunately because it is older, I could not find a link to the exact
        monitor):
      </Typography>
      <Typography variant="body1" color="text.primary">
        The monitor had been lying unused in a cardboard box, and my friend Mark
        so generously gifted it to me. In the spirit of being sustainable, I
        highly encourage you to also reuse a screen you have such as an old
        computer monitor or TV.
      </Typography>
      <Typography variant="body1" color="text.primary">
        The materials and dimensions described in the next steps will rely
        entirely on what monitor you chose. The thinner the monitor, the lighter
        your mirror will be and the closer it will sit to the wall.
        Additionally, it can help to find a monitor with inputs on the back of
        the monitor as opposed to the bottom. This will allow your housing to
        have a snug fit around the monitor, without worrying about crushing
        cables or having to drill holes.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Start by stripping your monitor of its plastic casing. This will ensure
        the glass lays flat against the monitor, so no light spills through and
        distorts the MagicMirror^2 images. I had to remove tiny screws to allow
        myself to pry the plastic case open. Next, you’ll want to remove the
        metal bezel around the front of the monitor. Using my fingers and a
        flathead screwdriver, I pried the metal bezel away from the monitor.
        There was even more metal casing around the back of the monitor that
        potentially could have been removed, but I decided to leave it intact to
        protect the circuitry.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Next, take measurements of your new naked monitor.
      </Typography>
      ADD MEASUREMENTS FOR MONITOR HERE
      <Typography variant="body1" color="text.primary">
        Based on your monitor’s height and width, you’ll need a piece of one-way
        glass(confusingly also called{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web"
        >
          two-way mirror glass
        </Link>
        ). This special glass reflects, or mirrors, light from one side, and
        allows light to shine through the other. The mirror side will face
        outward, while the other side will lie flat against your monitor,
        allowing the images from your MagicMirror^2 platform to shine through!
      </Typography>{" "}
      <Typography variant="body1" color="text.primary">
        One-way glass can be hard to find, and the pandemic caused prices to
        rise due to supply chain issues, resulting in a glass shortage. Buying
        one-way glass online can come with hefty shipping costs, and a single
        order of a custom cut piece of specialty glass can be very expensive. I
        would recommend contacting your local glass suppliers, either building
        suppliers or automobile glass distributors, and inquiring about prices.
        You won’t have to pay shipping if the store is close enough for pick up.
        I had to call about 8 different shops before I found a shop that either
        carried it or quoted me a reasonable price:
      </Typography>
      <Typography variant="body1" color="text.primary">
        I would recommend a piece of glass no more than ¼ inch thick to allow
        the images from the MagicMirror^2 to shine through the glass. Still
        can’t find a reasonable price? Some builders used{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://builtbyaz.com/smart-mirror/glass-or-acrylic/"
        >
          acrylic sheets or reflective film over a mirror
        </Link>
        . However, I did not want to experience any distortion while looking at
        my reflection in the mirror, so glass was the obvious choice. This also
        means the mirror will look flawless when it’s off!
      </Typography>
      <Typography variant="body1" color="text.primary">
        Now you need some wood. As a first time woodworker, I opted for pine,
        known as a beginner friendly type of wood. To give myself plenty of room
        for mistakes, I bought{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Common-1-in-x-3-in-x-6-ft-Actual-0-75-in-x-2-5-in-x-6-ft-Pine-Board/1000070127"
        >
          2 3x6s
        </Link>{" "}
        and a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/15-32-in-Common-Pine-Sanded-Plywood-Application-as-2-x-2/3043814"
        >
          2x2ft piece of plywood
        </Link>
        . I also must recommend a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Pony-1-1-8-in-Corner-Clamp/1000989056"
        >
          corner clamp
        </Link>{" "}
        for both the frame and the dummy box.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Build The Frame
      </Typography>
      <Typography variant="body1" color="text.primary">
        To determine the length of my pieces, I needed the opening of the frame
        to be slightly smaller than the length and width of the piece of glass.
        This differential will provide a small strip of frame so the glass can
        be attached with{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/LOCTITE-Power-Grab-Ultimate-2-7oz-Crystal-Clear/1002641662"
        >
          silicone glue
        </Link>
        . My glass measured 12 11/16 inches by 15 ½ inches. For the shorter
        boards of the frame, I subtracted ½ inch from each side, giving me 12
        3/16 inches x 15 inches. Before you cut the longer pieces of wood,
        remember to add in the width of the wood (in my case 2.5 inches per
        side). The end grain of the shorter boards will butt against the longer
        boards edges at a 90 degree angle. My final dimensions were 12 3/16
        inches x 20 inches.
      </Typography>
      ADD Frame rendering
      <Typography variant="body1" color="text.primary">
        here After making the cuts, I used the corner clamp and the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Gorilla-Wood-Glue-Off-White-Interior-Exterior-Wood-Adhesive-Actual-Net-Contents-8-fl-oz/5002457557"
        >
          wood glue
        </Link>{" "}
        to attach my boards. Remember to spread the glue on evenly, and clamp
        for at least 30 minutes. After all sides were glued, I allowed the frame
        to dry overnight.
      </Typography>
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
        time, so the corner braces are not visible. Next, a light sand job with{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/3M-25150P-G-Advanced-Sandpaper-11-Inches/dp/B00KW3WN8W/ref=sr_1_2?crid=RIGQDKI0IBQ4&keywords=p150+sandpaper&qid=1649791636&sprefix=p150+sandpaper%2Caps%2C242&sr=8-2"
        >
          fine sandpaper
        </Link>{" "}
        and I was ready to{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Minwax-Wood-Finish-Ebony-Oil-Based-Interior-Stain-Actual-Net-Contents-8-fl-oz/999914479"
        >
          stain
        </Link>
        . Although the can recommended 2 coats, I actually used 3 to achieve a
        richer look. Allow your stain to dry overnight.
      </Typography>{" "}
      <Typography variant="body1" color="text.primary">
        Placing the stained side of the frame down, I spread a line of silicone
        to the very edge of the frame opening. Use a plastic knife or spoon to
        evenly spread the silicone on the frame. Carefully attach the one-way
        glass to the back, and remember to place the mirror side down! I stacked
        some paint cans on the back of the glass around the frame to clamp the
        glass down. Allow the frame to dry for 24 hours.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Build The Dummy Box
      </Typography>
      <Typography variant="body1" color="text.primary">
        Carefully lay your stripped monitor, screen down on top of the glass.
        Take measurements of the sandwiched monitor and glass. To calculate the
        long sides of your dummy box, add in the thickness of the pieces of the
        wood (in my case .75 inches per side). The end grains of the short
        boards will butt against the face side of the long boards.
      </Typography>
      ADD BOX rendering here
      <Typography variant="body1" color="text.primary">
        Use the corner clamp to glue and dry overnight. I used four more .75inch
        corner brackets to reinforce the box. Ensure the monitor is correctly
        lined up against the glass, and carefully place the dummy box over the
        monitor and glass sandwich. Using the four{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.homedepot.com/p/Everbilt-4-in-Zinc-Plated-Heavy-Duty-Corner-Brace-2-Pack-15446/202034277"
        >
          corner braces
        </Link>
        , lay one in each corner flat against the back of the monitor. Mark the
        holes for the screws with a pencil, and screw the braces in. Remove the
        dummy box from the rest of the frame and monitor. Apply your sanding and
        stain.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Once the box dries overnight, carefully replace the dummy box back on
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
        from the outer faces of the dummy box to the back of the frame. Notice,
        I did not glue the box to the frame; If the monitor fails, you need to
        be able to deconstruct the mirror housing to resolve.
      </Typography>
      <Typography variant="body1" color="text.primary">
        The last piece needed for the dummy box is the back plywood. Determine
        the orientation of your mirror, and note which side is the top. To
        determine the plywood width, measure from the outer face of your top
        dummy box board to 1/3rd of the length of the dummy box. To determine
        the length, measure from the outer width of your dummy box.
      </Typography>
      BACK OF DUMMY BOX VIEW HERE
      <Typography variant="body1" color="text.primary">
        Apply the sandpaper and staining (for the last time :D ). Once dry, use
        a level and attach the “Picture Side” of your french cleat to the
        plywood. Use three 1.5inch corner braces to attach the plywood to the
        dummy box. Again, I recommend not to glue in case a monitor component
        fails.
      </Typography>
      <br />
      <Typography variant="h5" color="text.primary">
        Connect And Manage The Cables
      </Typography>
      <Typography variant="body1" color="text.primary">
        The TFT monitor used only supports VGA, so wire your RaspberryPi to a{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://thepihut.com/products/micro-hdmi-to-vga-adaptor"
        >
          microHDMI to VGA adapter
        </Link>
        , then connect the adapter to the{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B07HNXC5LZ/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
        >
          VGA to VGA cable
        </Link>
        , and finally into the monitor. Plug in the monitor’s{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.amazon.com/gp/product/B08F7DVY8G/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
        >
          power chord
        </Link>{" "}
        to the{" "}
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
        to separate the cords for the monitor power, RaspberryPi power, and
        monitor VGA cables. I attached squares of{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.lowes.com/pd/Scotch-12-Pack-1-in-Clear-Fastener/999989986"
        >
          clear velcro fasteners
        </Link>{" "}
        to the back of the power box for the Raspberry Pi, Mirror. I then placed
        another square of velcro on the back of the monitor. Velcro the squares
        to secure. I stuck a few{" "}
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
      <br />
      <Typography variant="h5" color="text.primary">
        Hang, Test, and Enjoy!
      </Typography>
      <Typography variant="body1" color="text.primary">
        Select where to hang your mirror, and remember you will need to be near
        a wall outlet. The French Cleat will support up to 75lbs in drywall,
        with no stud needed! However, this cleat will not work in plaster. If
        so, you need to find a stud and use a different hanging system. Lay the
        “Wall Side” of the french cleat against the wall and use a pencil to
        mark the screw holes. Drill pilot holes, and then screw in the cleat.
      </Typography>
      <Typography variant="body1" color="text.primary">
        Hang, and plug the A/C splitter into the wall outlet. The RaspberryPi
        should boot automatically, and then the MagicMirror^2 platform should be
        launched! To turn the mirror off, you can{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.howtogeek.com/768053/how-to-ssh-into-your-raspberry-pi/"
        >
          SSH into your RaspberryPi
        </Link>{" "}
        and type:<code>sudo shutdown now</code>
        Or you can create an{" "}
        <Link
          color="secondary.main"
          target="_blank"
          href="https://www.youtube.com/watch?v=0sovQSeYcxs&t=143s&ab_channel=KskRoyal"
        >
          iPhone shortcut to SSH into your mirror
        </Link>
        .
      </Typography>
      <Typography variant="body1" color="text.primary">
        Lastly, you can add the MMM-Remote-Controller to your Mirror. Access the
        remote via the IP address and port as specified in your config.js:
        http://192.168.xxx.xxx:8080/remote.html. I created an iPhone home screen
        shortcut from the web address!
      </Typography>
      INSERT MAGIC REMOTE SCREENSHOTS HERE
      <Typography variant="body1" color="text.primary">
        Enjoy!
      </Typography>
      <Link
        color="secondary.main"
        target="_blank"
        href="github.com/fairhurst-dev/MagicMirror"
      >
        github.com/fairhurst-dev/MagicMirror
      </Link>{" "}
    </Box>
  );
}

export default Hardware;
