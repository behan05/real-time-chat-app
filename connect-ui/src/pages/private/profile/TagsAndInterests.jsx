import React from 'react';
import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  Chip,
} from '../../../MUI/MuiComponents';
import { SendIcon } from '@/MUI/MuiIcons';

import NavigateWithArrow from '@/components/private/NavigateWithArrow';
import StyledText from '@/components/common/StyledText';
import BlurWrapper from '@/components/common/BlurWrapper';
import StyledActionButton from '@/components/common/StyledActionButton'
const interestOptions = [
  'Movies', 'Music', 'Gaming', 'Sports', 'Art', 'Coding', 'Reading', 'Traveling', 'Fitness', 'Cooking',
];

const chatPreferences = [
  'Deep Talks', 'Casual Chat', 'Learning & Knowledge', 'Humor / Memes', 'No Small Talk'
];

function TagsAndInterests() {
  const [formData, setFormData] = React.useState({
    interests: [],
    personality: '',
    chatStyles: [],
    strictInterestMatch: false
  });

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(tag)
        ? prev.interests.filter(t => t !== tag)
        : [...prev.interests, tag]
    }));
  };

  const handleChatStyleToggle = (style) => {
    setFormData(prev => ({
      ...prev,
      chatStyles: prev.chatStyles.includes(style)
        ? prev.chatStyles.filter(s => s !== style)
        : [...prev.chatStyles, style]
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Tags & Interests:', formData);
    // TODO: integrate API
  };

  return (
    <Box component="section">
      <Stack mb={2}>
        <NavigateWithArrow redirectTo="/connect/profile" text="Tags And Interests" />
      </Stack>

      <BlurWrapper component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Typography textAlign="center" variant="h5" fontWeight={600}>
            Your <StyledText text="Tags & Interests" />
          </Typography>

          <Typography variant="body2" textAlign="center" color="text.secondary">
            Select and share your top interests. Our intelligent algorithm will use them to improve your matching experience.
          </Typography>

          {/* Predefined Interests */}
          <FormControl fullWidth>
            <Typography gutterBottom>Select Interests</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {interestOptions.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  clickable
                  color={formData.interests.includes(tag) ? 'primary' : 'default'}
                  onClick={() => handleTagToggle(tag)}
                />
              ))}
            </Box>
          </FormControl>

          {/* Personality Type */}
          <FormControl fullWidth>
            <InputLabel id="personality-label">Personality Type</InputLabel>
            <Select
              labelId="personality-label"
              id="personality"
              name="personality"
              value={formData.personality}
              label="Personality Type"
              onChange={(e) => setFormData(prev => ({ ...prev, personality: e.target.value }))}
            >
              <MenuItem value="introvert">Introvert</MenuItem>
              <MenuItem value="extrovert">Extrovert</MenuItem>
              <MenuItem value="ambivert">Ambivert</MenuItem>
            </Select>
          </FormControl>

          {/* Chat Preferences */}
          <FormGroup>
            <Typography gutterBottom>Preferred Chat Style</Typography>
            {chatPreferences.map(style => (
              <FormControlLabel
                key={style}
                control={
                  <Checkbox
                    checked={formData.chatStyles.includes(style)}
                    onChange={() => handleChatStyleToggle(style)}
                  />
                }
                label={style}
              />
            ))}
          </FormGroup>

          {/* Strict Match Toggle */}
          <FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.strictInterestMatch}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    strictInterestMatch: e.target.checked
                  }))}
                />
              }
              label={formData.strictInterestMatch ? 'Strict Interest Match: ON' : 'Strict Interest Match: OFF'}
            />
          </FormControl>

          <StyledActionButton
            endIcon={<SendIcon />}
            type='submit'
          >
            Save Preferences
          </StyledActionButton>
        </Stack>
      </BlurWrapper>
    </Box>
  );
}

export default TagsAndInterests;
