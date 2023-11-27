import SearchIcon from '@mui/icons-material/Search'
import { InputBase, Button, Typography } from '@mui/material'
import { useSearchProduct } from 'hooks/endpoints'
import { useCallback, useState } from 'react'
import { TProduct } from 'types'
import { axios } from 'utils'

type TGetSearch = (productName: string | null) => Promise<TProduct[]>

const SearchBar = () => {
  const [productName, setProductName] = useState<string | null>(null)

  const getSearch: TGetSearch = useCallback(
    async (productName: string | null) => {
      if (productName)
        return await axios
          .get(`/search?name=${productName}`)
          .then((response) => {
            return response.data
          })
          .catch((error) => {
            console.log(error)
          })
      else return undefined
    },
    [productName]
  )

  const { refetch } = useSearchProduct(() => getSearch(productName))

  const handleSearch = () => {
    refetch()
  }
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '35px',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        width: '60%',
        margin: '20px',
      }}
    >
      <SearchIcon sx={{ color: 'gray', marginLeft: 2 }} />
      <InputBase
        onChange={(e) => {
          setProductName(e.target.value)
        }}
        placeholder="Searching for..."
        style={{
          color: 'gray',
          width: '100%',
          padding: '8px',
        }}
      />

      <Button
        onClick={handleSearch}
        variant="contained"
        sx={{
          width: '15%',
          height: '100%',
          borderRadius: '0 15px 15px 0',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          Search
        </Typography>
      </Button>
    </div>
  )
}

export default SearchBar
