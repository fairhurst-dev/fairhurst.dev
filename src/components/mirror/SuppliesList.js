import React from "react";
import suppliesList from "../data/SuppliesData";
import { Box, List, ListItem, ListItemText, Link } from "@mui/material";

const subheadings = Object.keys(suppliesList);

function SuppliesList() {
  return (
    <Box>
      <List>
        {subheadings.map((i) => (
          <div>
            <ListItem>
              <ListItemText>{i}</ListItemText>
            </ListItem>
            {suppliesList[i].map((j) => (
              <ListItem sx={{ ml: "1em" }}>
                <ListItemText>
                  {" "}
                  -{" "}
                  {j.url ? (
                    <Link color="#fff" target="_blank" href={j.url}>
                      {j.text}
                    </Link>
                  ) : (
                    j.text
                  )}
                </ListItemText>
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </Box>
  );
}

export default SuppliesList;
