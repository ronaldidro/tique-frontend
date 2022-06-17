import { useState, useEffect } from 'react'
import axios from 'axios'

export const useResource = baseUrl => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const request = axios.get(baseUrl)
    request.then(response => setResources(response.data))
  }, [baseUrl])

  const create = async resource => {
    const response = await axios.post(baseUrl, resource)
    setResources([...resources, response.data])
  }

  const service = {
    create
  }

  return [resources, service]
}
