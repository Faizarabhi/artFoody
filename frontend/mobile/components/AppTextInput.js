import { TextInput } from 'react-native'
import React, { useState } from 'react'
import { SPACING, colors, FontSize } from '../Restaurant'

const AppTextInput = ( {...otherProps}) => {
    const [focused, setFocused] = useState(false);
    return (
        <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={colors.darkText}
        style={[
          {
            fontSize: FontSize.small,
            padding: SPACING * 2,
            backgroundColor: colors.lightPrimary,
            borderRadius: SPACING,
            marginVertical: SPACING,
          },
          focused && {
            borderWidth: 3,
            borderColor: colors.primary,
            shadowOffset: { width: 4, height: SPACING },
            shadowColor: colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: SPACING,
          },
        ]}
        {...otherProps}
      />
    )
}

export default AppTextInput