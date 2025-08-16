import React from 'react'
import { Avatar, CardHeader, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import { motion, MotionProps } from 'framer-motion'

type BubbleProps = MotionProps & {
    icon: React.ReactNode;
    avatarIcon: React.ReactNode;
    tooltipTitle: string;
    tooltipSummary: string;
    largeScreenOnly?: boolean,
    itemKey: string
};

export default function Bubble({ itemKey, icon, avatarIcon, tooltipSummary, tooltipTitle, largeScreenOnly = false, ...props }: BubbleProps) {
    const theme = useTheme();
    const isBiggerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <motion.div
            whileHover={{ scale: 1.1, background: 'white' }}
            {...props}
            className={`
                    rounded-full bubble-item absolute backdrop-blur-lg bg-white/70 dark:bg-white/10
                    shadow-[0px_2px_10px_rgba(0,0,0,0.1)]
                    md:p-[1.4rem] p-2.5
                    flex items-center justify-center 
                    cursor-auto
                    border dark:border-white/10
                    bg-gradient-to-r from-slate-50/70 to-slate-50 dark:from-white/10 dark:to-transparent
                    transition-transform
                    ${ (largeScreenOnly && !isBiggerThanLg) ? 'hidden' : 'block' }
                    `}>
            <Tooltip
                itemID={tooltipTitle}
                key={`${ tooltipTitle }-${ itemKey }`}
                title={
                    <div className="p-4 max-w-xs shadow-md bg-zinc-900 border overflow-hidden rounded-xl border-dashed border-slate-300/35">
                        <CardHeader
                            sx={{ p: 0, m: 0 }}
                            avatar={<Avatar sx={{
                                height: { xs: 30, md: 40 }, width: { xs: 30, md: 40 },
                            }}>{avatarIcon}</Avatar>}
                            title={tooltipTitle}
                        />
                        <p className="text-sm mt-4 pl-1 text-gray-300">
                            {tooltipSummary}
                        </p>
                    </div>
                }
                slotProps={{
                    tooltip: { sx: { background: 'none' } },
                }}>
                <div>
                    {icon}
                </div>
            </Tooltip>
        </motion.div>
    )
}
