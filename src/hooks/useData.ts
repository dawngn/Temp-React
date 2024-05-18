import { axiosClient } from '@/services/axios-client'
import { useQuery } from '@tanstack/react-query'

export default function useData<T>({
	queryKey,
	path,
	params = {},
}: Pick<TPaginatedOptions, 'path' | 'queryKey' | 'params'>) {
	const fetchData = () => axiosClient.get(`${path}`, { params }).then((res) => res.data)

	return useQuery<T>({
		queryKey: [...queryKey, { ...params }],
		queryFn: fetchData,
		staleTime: Infinity,
	})
}
