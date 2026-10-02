import { useRouter } from 'next/router'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { MdTranslate } from 'react-icons/md'
import { useLocale, useT } from '../libs/i18n'

const LanguageToggleButton = () => {
    const router = useRouter()
    const locale = useLocale()
    const t = useT()
    const next = locale === 'pt' ? 'en' : 'pt'

    return (
        <IconButton
            aria-label={t.switchTo}
            title={t.switchTo}
            icon={<MdTranslate />}
            colorScheme={useColorModeValue('purple', 'orange')}
            variant='outline'
            mr={2}
            onClick={() => router.push(router.asPath, router.asPath, { locale: next, scroll: false })}
        />
    )
}

export default LanguageToggleButton
