import { base } from '@/libs/config/theme'
import {
  FormControlLabel,
  FormGroup,
  Checkbox as MuiCheckbox,
  Typography,
  styled,
} from '@mui/material'
import Image from 'next/image'

type CheckBoxTypes = {
  label: string
  onClick: (id: string) => void
  labor: string
}

const Checkbox = styled(MuiCheckbox)({
  padding: '0 0 0 2px',
  marginRight: 8,
})

const CheckboxLabor: React.FC<CheckBoxTypes> = ({ label, onClick, labor }) => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          mx: 0,
        }}
        control={
          <Checkbox
            disableRipple
            name="reasons"
            onClick={() => onClick(labor)}
            icon={<Image src="/assets/svgs/checkbox.svg" width={20} height={20} alt="checkbox" />}
            checkedIcon={
              <Image
                src="/assets/svgs/checkbox-checked.svg"
                width={20}
                height={20}
                alt="checkbox"
              />
            }
          />
        }
        label={
          <Typography variant="body2" color={base.black}>
            {label}
          </Typography>
        }
      />
    </FormGroup>
  )
}

export { CheckboxLabor }
