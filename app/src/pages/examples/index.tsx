import React, { useState } from 'react';
import { Typography, TextField, Box } from 'lib-react-components';
import { GroupItem } from './group_item';
import { ExampleItem } from './example_item';
import s from './index.module.sass';

interface IExamplesPageProps {
  config: IExampleGroup[];
}

export const ExamplesPage: React.FC<IExamplesPageProps> = (props) => {
  const { config } = props;
  const [searchValue, setSearchValue] = useState('');

  const getExampleItemStyles = (index: number) => {
    return { animationDelay: `${index / 20}s` };
  };

  let filteredConfig: IExampleGroup[];

  if (searchValue) {
    filteredConfig = config.map((group) => ({
      ...group,
      examples: group.examples.filter((example) => example.name.toLowerCase().includes(searchValue.toLowerCase())),
    }));
  }

  return (
    <div className={s.root}>
      <div className={s.m_width}>
        <Box
          className={s.header}
          stroke="grey"
          strokeOpacity={0.15}
          strokeType="bottom"
        >
          <Typography
            type="h3"
          >
            Examples
          </Typography>
          <TextField
            placeholder="Search"
            className={s.search_field}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </Box>

        {(filteredConfig || config).map((group) => (
          <GroupItem
            key={group.key}
            name={group.name}
          >
            {group.examples.map((example, index) => (
              <ExampleItem
                key={example.path}
                name={example.name}
                type={example.type}
                path={example.path}
                style={getExampleItemStyles(index)}
              />
            ))}
          </GroupItem>
        ))}
      </div>
    </div>
  );
};