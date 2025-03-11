import { useState } from "react"
import Chip from "@mui/material/Chip"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import type { FunctionComponent } from "react"

type PullRequestFilterArgs = {
  labels: string[]
  onLabelsSelected: (selectedLabels: string[]) => void
}

const PullRequestFilter: FunctionComponent<PullRequestFilterArgs> = ({
  labels,
  onLabelsSelected,
}) => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  return (
    <Autocomplete
      data-testid="auto-complete"
      multiple
      value={selectedLabels}
      onChange={(_, newValue) => {
        setSelectedLabels([...newValue])
        onLabelsSelected(newValue)
      }}
      options={labels}
      getOptionLabel={option => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index })
          return (
            <Chip
              data-testid="selected-label"
              key={key}
              label={option}
              {...tagProps}
            />
          )
        })
      }
      style={{ width: 600 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Select labels to filter the list"
          placeholder="Label"
        />
      )}
    />
  )
}

export default PullRequestFilter
