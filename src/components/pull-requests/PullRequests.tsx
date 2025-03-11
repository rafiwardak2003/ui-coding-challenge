import { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { Typography } from "@mui/material"
import { Chip, Link } from "@mui/material"
import { useGetPullRequestsQuery } from "../../store"
import { format } from "date-fns"
import Box from "@mui/material/Box"
import type { GridColDef } from "@mui/x-data-grid"
import type { PullRequest } from "../../types/pull-request"
import PullRequestFilter from "../pull-requests-filter/PullRequestsFilter"

const columns: GridColDef<PullRequest>[] = [
  {
    field: "title",
    headerName: "Title",
    width: 600,
  },
  {
    field: "lastName",
    headerName: "Label",
    sortable: false,
    width: 250,
    renderCell: ({ row }) => (
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}
      >
        {row.labels.map(label => (
          <Chip
            data-testid="label-chip"
            key={label.id}
            sx={{ borderColor: `#${label.color}` }}
            label={label.name}
            variant="outlined"
          />
        ))}
      </Box>
    ),
  },
  {
    field: "created_at",
    headerName: "Opened On",
    width: 300,
    valueGetter: (_, row) => format(row.created_at, "Pp"),
  },
  {
    field: "fullName",
    headerName: "",
    sortable: false,
    width: 160,
    renderCell: ({ row }) => (
      <Link href={row.html_url} target="_blank">
        View Pull Request
      </Link>
    ),
  },
]

const PullRequests = () => {
  const { data, isLoading } = useGetPullRequestsQuery()
  const [filteredPullRequests, setFilteredPullRequests] = useState<
    PullRequest[]
  >([])

  const labels = data
    ?.map(pr => pr.labels)
    .flat()
    .map(label => label.name)

  const filterPullRequests = (selectedLabels: string[]) => {
    const pullRequests = (data as PullRequest[]).filter(pr =>
      pr.labels
        .flat()
        .some(
          label =>
            !selectedLabels.length || selectedLabels.includes(label.name),
        ),
    )
    setFilteredPullRequests(pullRequests)
  }

  useEffect(() => {
    if (data) {
      setFilteredPullRequests(data)
    }
  }, [data])

  return (
    <Box>
      <Typography variant="h4">Pull Requests</Typography>
      <Box sx={{ marginY: 4 }}>
        <PullRequestFilter
          labels={labels ? [...new Set(labels)] : []}
          onLabelsSelected={filterPullRequests}
        />
      </Box>

      <DataGrid
        disableColumnMenu
        rows={filteredPullRequests}
        columns={columns}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default PullRequests
