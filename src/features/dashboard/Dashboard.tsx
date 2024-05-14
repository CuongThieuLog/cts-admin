import { green, red } from '@/libs/config/theme'
import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { BoxTotal } from './components'

const Dashboard = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={5} mt={2}>
        <BoxTotal pathImage="/assets/imgs/engineer.png" title="Tổng số nhân công" total={1900} />
        <BoxTotal
          pathImage="/assets/imgs/manager.png"
          title="Tổng số quản lý"
          total={20002}
          bgColor={green[200]}
        />
        <BoxTotal
          pathImage="/assets/imgs/construction.png"
          title="Tổng số công trình"
          total={1900}
          bgColor={red[300]}
        />
      </Stack>

      <Stack py={2} direction="row" gap={2} flexWrap="wrap" pr={2}>
        <Card sx={{ maxWidth: '60%' }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://baoxaydung.com.vn/stores/news_dataimages/2024/052024/05/14/image00120240505143149.jpg?rt=20240505143150"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quảng Bình: Triển khai xây dựng nhà ở xã hội cho đối tượng thu nhập thấp, công nhân
              khu công nghiệp
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (Xây dựng) - UBND tỉnh Quảng Bình vừa có Công văn yêu cầu các Sở, ban, ngành, địa
              phương thực hiện Quyết định số 338/QĐ-TTg ngày 03/4/2023 của Thủ tướng Chính phủ về
              việc phê duyệt Đề án “Đầu tư xây dựng ít nhất 1 triệu căn nhà ở xã hội cho đối tượng
              thu nhập thấp, công nhân khu công nghiệp giai đoạn 2021 - 2030”.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://baoxaydung.com.vn/quang-binh-trien-khai-xay-dung-nha-o-xa-hoi-cho-doi-tuong-thu-nhap-thap-cong-nhan-khu-cong-nghiep-374737.html"
              style={{
                textDecoration: 'none',
                color: 'blue',
                cursor: 'pointer',
                paddingLeft: '10px',
                paddingBottom: '10px',
              }}
            >
              Xem chi tiết
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: '38.8%' }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://www.vattutoanthang.com/Portals/27530/bientrongtrinhdangthicong.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Điều chỉnh cục bộ Quy hoạch Cảng hàng không quốc tế Nội Bài thời kỳ 2021 - 2030
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (Xây dựng) – Bộ Giao thông vận tải vừa ban hành Quyết định số 497/QĐ-BGTVT về việc phê
              duyệt điều chỉnh cục bộ Quy hoạch Cảng hàng không quốc tế Nội Bài thời kỳ 2021 - 2030.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://baoxaydung.com.vn/dieu-chinh-cuc-bo-quy-hoach-cang-hang-khong-quoc-te-noi-bai-thoi-ky-2021-2030-374746.html"
              style={{
                textDecoration: 'none',
                color: 'blue',
                cursor: 'pointer',
                paddingLeft: '10px',
                paddingBottom: '10px',
              }}
            >
              Xem chi tiết
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            sx={{ height: 500 }}
            image="https://baoxaydung.com.vn/stores/news_dataimages/2024/052024/05/16/image00120240505164727.jpg?rt=20240505164729"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Trà Vinh: Công ty TNHH Cây xanh Công Minh trúng nhiều gói thầu “khủng”
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Liên quan đến Công ty TNHH Cây xanh Công Minh (trụ sở thị xã Đồng Xoài, tỉnh Bình
              Phước), Cơ quan An ninh điều tra, Bộ Công an đã yêu cầu nhiều tỉnh, thành trên cả nước
              cung cấp tài liệu liên quan đến các dự án trồng, chăm sóc cây xanh; chỉnh trang đô
              thị…
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://baoxaydung.com.vn/tra-vinh-cong-ty-tnhh-cay-xanh-cong-minh-trung-nhieu-goi-thau-khung-374750.html"
              style={{
                textDecoration: 'none',
                color: 'blue',
                cursor: 'pointer',
                paddingLeft: '10px',
                paddingBottom: '10px',
              }}
            >
              Xem chi tiết
            </Link>
          </CardActions>
        </Card>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e8ZBoHf9iJU?si=TD8APswGc20KNGkU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder={0}
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T10iRX6c0eg?si=AXXNZWSFkv2jAvEN"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder={0}
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </Stack>
    </Stack>
  )
}

export { Dashboard }
