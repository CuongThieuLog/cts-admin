import { createEquipment } from '@/libs/api/equipment'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useCreateEquipment = () => {
  const mutation = useMutation({
    mutationFn: createEquipment,
    onSuccess: () => {
      toast.success('Thêm mới trang thiết bị công trình thành công')
    },
    onError: () => {
      toast.error('Thêm mới trang thiết bị công trình thất bại')
    },
  })

  return mutation
}
