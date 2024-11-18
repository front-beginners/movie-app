import React, { useState } from 'react'
import { useWinnerMovieByYearQuery } from '@/hooks/use-winner-movie-by-year-query'

export function useWinnerMovieByYear() {
  const [formText, setformText] = useState('')
  const [inputValue, setInputValue] = useState('')
  const { winnerMovieByYear, isError, isLoading } = useWinnerMovieByYearQuery({
    year: inputValue,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInputValue(formText)
  }

  const isButtonDisabled = formText.length === 0
  const noResultFound =
    winnerMovieByYear.length === 0 && inputValue.length > 0 && !isError

  return {
    setformText,
    winnerMovieByYear,
    handleSubmit,
    isButtonDisabled,
    noResultFound,
    isRequestError: isError,
    isLoading,
  }
}
