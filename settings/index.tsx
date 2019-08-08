function settingsComponent(props: SettingsComponentProps) {
    return (
        <Page>
            <Section
                description={
                    <Text>
                        {' '}
                        Description <Link source="">here</Link>
                    </Text>
                }
                title={
                    <Text bold align="center">
                        App Settings
                    </Text>
                }
            >
                <Text>
                    This is a very basic demo settings page to show off some of the current
                    capabilities of the Companion Settings library.
                </Text>
            </Section>
        </Page>
    );
}

registerSettingsPage(settingsComponent);
